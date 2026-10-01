// Genera build/csv/*.csv (speaker,line) desde episodes/*.md para "Import Script" de ElevenLabs.
// Uso: node scripts/episodes-to-csv.mjs [--strip-tags]
import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const episodesDir = join(root, "episodes");
const outDir = join(root, "build", "csv");
const stripTags = process.argv.includes("--strip-tags");

const SPEAKER = /^([A-ZÁÉÍÓÚÑÜ][A-ZÁÉÍÓÚÑÜ ]*):[ \t]*(.*)$/;

function clean(text) {
  let out = text
    .replace(/\[SFX:[^\]]*\]/g, "")
    .replace(/\[pause\]/gi, "...")
    .replace(/\*([^*]+)\*/g, "$1");
  if (stripTags) out = out.replace(/\[[^\]]*\]/g, "");
  return out.replace(/(?:\.{3}\s*){2,}/g, "... ").replace(/\s+/g, " ").trim();
}

function parseEpisode(markdown) {
  const blocks = [];
  let current = [];
  for (const raw of markdown.split(/\r?\n/)) {
    if (raw.trim() === "") {
      if (current.length) blocks.push(current);
      current = [];
    } else {
      current.push(raw.trim());
    }
  }
  if (current.length) blocks.push(current);

  const rows = [];
  for (const [first, ...rest] of blocks) {
    const match = SPEAKER.exec(first);
    if (!match) continue;
    const text = clean([match[2], ...rest].filter((l) => !/^\[(SFX|FIN)\b/.test(l)).join(" "));
    if (/[\p{L}\p{N}]/u.test(text)) rows.push({ speaker: match[1], text });
  }
  return rows;
}

const files = (await readdir(episodesDir)).filter((f) => /^\d+.*\.md$/.test(f)).sort();

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });

for (const file of files) {
  const rows = parseEpisode(await readFile(join(episodesDir, file), "utf8"));
  const csv = ["speaker,line", ...rows.map((r) => `${r.speaker},"${r.text.replaceAll('"', '""')}"`)].join("\n") + "\n";
  await writeFile(join(outDir, file.replace(/\.md$/, ".csv")), csv, "utf8");
  console.log(`${file}: ${rows.length} líneas`);
}

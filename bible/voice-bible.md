## Purpose

This document defines how each character's voice should sound and be configured for AI text-to-speech generation (e.g. ElevenLabs), plus the script conventions used across all episodes to direct delivery, emotion, and pacing. `characters.md` defines personality; this file defines how that personality is realized in generated audio.

## Voice Design Principles

- Every character must be instantly recognizable by voice alone, without hearing a name.
- Mexican Spanish (Mexico City accent) throughout — no other national or regional accent unless specified.
- Prioritize a natural, human, non-"synthetic" performance over technical precision. If a setting choice makes a voice sound flatter but more "correct," prefer the one that sounds alive.
- Re-evaluate voice/config choices against the Review Checklist (below) after every batch of episodes, not just once.

## Per-Character Voice Specs

Each entry lists the target voice profile and suggested starting values for TTS voice settings. Settings are starting points — tune per engine/voice and re-audition after script changes.

### Ajolote Azul
- **Voice profile:** Real Mexican boy, ~8 years old. Bright, forward, unpolished — not a stylized "cartoon kid" voice.
- **Suggested settings:** Lower stability (more expressive/variable delivery, ~25-35%) to capture his excitement swings; moderate similarity boost (~70-80%); style exaggeration on the higher end for his dramatic moments.
- **Delivery notes:** Fast when excited, with a clear "wind-up" before dramatic declarations. Should sound almost breathless at emotional peaks, then settle quickly.

### Xolo
- **Voice profile:** Adult Mexican male, dry and deadpan, warm underneath.
- **Suggested settings:** Higher stability (~50-60%) to keep the deadpan delivery consistent; moderate-low style exaggeration (his humor comes from restraint, not big swings).
- **Delivery notes:** Comic timing depends on pacing — leave a beat (short pause) before or after punchlines rather than rushing through them.

### Abuela
- **Voice profile:** Mexican woman, late 60s/70s, warm and grandmotherly, unhurried.
- **Suggested settings:** High stability (~60-70%) for a steady, comforting cadence; moderate similarity boost.
- **Delivery notes:** Never rushed, even when mildly scolding. Warmth should read even through her most "unimpressed" lines.

### Don Pepe
- **Voice profile:** Mexican man, 45-55, market-vendor energy — lively but not cartoonish.
- **Suggested settings:** Moderate stability (~40-50%); moderate-high style for his teasing/energetic delivery.
- **Delivery notes:** Slightly sing-song market-vendor cadence on his sales lines; calmer/warmer on personal lines.

### Narrador
- **Voice profile:** Mexican man, 35-50, warm intimate storyteller.
- **Suggested settings:** High stability (~65-75%) for consistency across long narration passages; low-moderate style (should stay grounded, not theatrical).
- **Delivery notes:** Cinematic pacing on scene-setting lines, quicker and lighter on comedic beats, calm on reassurance/transitions.

### Vale
- **Voice profile:** Mexican girl, ~8, clear and grounded, less dramatic than Ajolote.
- **Suggested settings:** Higher stability than Ajolote (~45-55%) to contrast his volatility.
- **Delivery notes:** Flat/deadpan delivery when skeptical; genuine warmth breaks through rarely, which should make those moments stand out.

### Doña Chelo
- **Voice profile:** Mexican woman, 60s-70s, animated and chatty.
- **Suggested settings:** Lower stability (~30-40%) to capture her dramatic storytelling swings.
- **Delivery notes:** Runs long sentences together without a breath, then a for-effect pause before the "juicy" detail.

### Kevin "El Presumido"
- **Voice profile:** Mexican boy, ~10, trying to sound older/cooler than he is.
- **Suggested settings:** Moderate stability (~40-50%); style leaning toward exaggerated bravado.
- **Delivery notes:** Performative confidence that occasionally cracks — brief, genuine moments should sound noticeably less performed.

## Script Conventions for TTS

These conventions are used consistently in every episode script so voice generation stays predictable across the whole series.

- **Speaker labels:** Each line is prefixed with the character name in caps followed by a colon, e.g. `AJOLOTE:`. One character per line/block.
- **Emotion/delivery tags:** Bracketed tags before a line indicate delivery, e.g. `[excited]`, `[whispering]`, `[sarcastic]`, `[out of breath]`. Keep to one tag per line; don't stack more than two.
- **Pauses:** Use `...` for a short natural pause within a line. For a longer, deliberate pause between lines, use an explicit `[pause]` marker on its own line. Avoid relying on line breaks alone to signal pacing.
- **Emphasis:** Wrap an emphasized word in `*asterisks*` in the script (for the human reviewer/voice director); convert to whatever emphasis syntax the chosen TTS engine supports at generation time.
- **Non-speech sounds:** Sound effects and non-verbal character sounds (laughs, sighs, gasps) are written as their own bracketed cue on its own line, e.g. `[laughs]`, `[gasps]`, not embedded mid-sentence.
- **Engine-specific syntax:** Exact supported tag/pause syntax should be verified against the current ElevenLabs (or chosen engine's) documentation before the first production batch, since supported tags evolve. This file defines the *authoring convention*, which can be mapped to whatever the engine actually supports at generation time.

## Review Checklist

- Can I recognize each character immediately without hearing their name?
- Does Ajolote sound like a real kid, not an adult imitating a child?
- Does Xolo sound sufficiently different from Ajolote, with enough personality that his dry lines land as funny?
- Does Abuela sound genuinely Mexican and grandmotherly, rather than "generic Spanish grandmother"?
- Does the Chilango dialogue feel natural rather than forced?
- Are the emotional performances convincing?
- Does the pacing work for children (not too fast, not condescending)?
- Are there too many sound effects/tags cluttering the performance?
- Do all the voices sound like they belong in the same world?

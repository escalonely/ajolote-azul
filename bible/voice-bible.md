# Voces

## Propósito

Este documento define cómo debe sonar y configurarse la voz de cada personaje para la generación de audio mediante IA (por ejemplo, ElevenLabs), además de las convenciones de guion que se usan en todos los episodios para dirigir la interpretación, la emoción y el ritmo. `characters.md` define la personalidad; este archivo define cómo esa personalidad se traduce en el audio generado.

## Principios de Diseño de Voz

- Cada personaje debe ser reconocible al instante solo por la voz, sin necesidad de escuchar su nombre.
- Español mexicano (acento de la Ciudad de México) en todo momento — ningún otro acento nacional o regional, salvo que se indique lo contrario.
- Priorizar una interpretación natural, humana y no "sintética" por encima de la precisión técnica. Si un ajuste hace que una voz suene más plana pero más "correcta," prefiere la opción que suene más viva.
- Reevaluar las decisiones de voz/configuración con la Lista de Revisión (más abajo) después de cada tanda de episodios, no solo una vez.

## Especificaciones de Voz por Personaje

Cada entrada enumera el perfil de voz objetivo y los valores iniciales sugeridos para la configuración de voz de TTS. Los valores son puntos de partida — ajústalos según el motor/voz y vuelve a probarlos después de cambios en el guion.

### Ajolote Azul
- **Perfil de voz:** Niño mexicano real, de unos 8 años. Brillante, directo, sin pulir — no una voz estilizada de "niño de caricatura."
- **Configuración sugerida:** Estabilidad baja (interpretación más expresiva/variable, ~25-35%) para capturar sus subidones de emoción; impulso de similitud moderado (~70-80%); exageración de estilo alta en sus momentos dramáticos.
- **Notas de interpretación:** Rápido cuando se emociona, con un claro "impulso" antes de las declaraciones dramáticas. Debe sonar casi sin aliento en los picos emocionales, y calmarse rápido después.

### Xolo
- **Perfil de voz:** Hombre mexicano adulto, seco y sin emoción aparente, cálido por debajo.
- **Configuración sugerida:** Estabilidad alta (~50-60%) para mantener consistente la entrega seria; exageración de estilo baja o moderada (su humor viene de la contención, no de grandes cambios).
- **Notas de interpretación:** El timing cómico depende del ritmo — deja un compás (pausa breve) antes o después de los remates en lugar de apresurarlos.

### Abuela
- **Perfil de voz:** Mujer mexicana, de casi 70 u 80 años, cálida y como de abuela, sin prisa.
- **Configuración sugerida:** Estabilidad alta (~60-70%) para una cadencia estable y reconfortante; impulso de similitud moderado.
- **Notas de interpretación:** Nunca apresurada, incluso cuando regaña levemente. La calidez debe notarse incluso en sus líneas más "indiferentes."

### Don Pepe
- **Perfil de voz:** Hombre mexicano, de 45 a 55 años, con energía de vendedor de mercado — animado pero no caricaturesco.
- **Configuración sugerida:** Estabilidad moderada (~40-50%); estilo moderado-alto para su interpretación bromista y enérgica.
- **Notas de interpretación:** Cadencia ligeramente cantadita de vendedor de mercado en sus líneas de venta; más tranquilo y cálido en las líneas personales.

### Narrador
- **Perfil de voz:** Hombre mexicano, de 35 a 50 años, narrador cálido e íntimo.
- **Configuración sugerida:** Estabilidad alta (~65-75%) para mantener consistencia en pasajes largos de narración; estilo bajo-moderado (debe mantenerse con los pies en la tierra, no teatral).
- **Notas de interpretación:** Ritmo cinematográfico en las líneas que describen el entorno, más rápido y ligero en los momentos cómicos, tranquilo en las transiciones y momentos de consuelo.

### Vale
- **Perfil de voz:** Niña mexicana, de unos 8 años, clara y con los pies en la tierra, menos dramática que Ajolote.
- **Configuración sugerida:** Estabilidad más alta que la de Ajolote (~45-55%) para contrastar con su volatilidad.
- **Notas de interpretación:** Entrega plana/indiferente cuando está escéptica; la calidez genuina aparece pocas veces, lo cual debe hacer que esos momentos destaquen.

### Doña Chelo
- **Perfil de voz:** Mujer mexicana, de 60 a 70 años, animada y platicadora.
- **Configuración sugerida:** Estabilidad baja (~30-40%) para capturar sus cambios dramáticos al contar historias.
- **Notas de interpretación:** Encadena frases largas sin tomar aire, y luego hace una pausa para dar efecto antes del detalle "jugoso."

### Kevin "El Presumido"
- **Perfil de voz:** Niño mexicano, de unos 10 años, tratando de sonar mayor y más cool de lo que es.
- **Configuración sugerida:** Estabilidad moderada (~40-50%); estilo inclinado hacia la bravuconería exagerada.
- **Notas de interpretación:** Confianza actuada que a veces se resquebraja — los momentos breves y genuinos deben sonar notablemente menos actuados.

## Convenciones de Guion para TTS

Estas convenciones se usan de manera consistente en todos los episodios para que la generación de voz sea predecible a lo largo de toda la serie.

- **Etiquetas de hablante:** Cada línea lleva como prefijo el nombre del personaje en mayúsculas seguido de dos puntos, por ejemplo `AJOLOTE:`. Un personaje por línea/bloque.
- **Etiquetas de emoción/interpretación:** Etiquetas entre corchetes antes de una línea indican la interpretación, por ejemplo `[excited]`, `[whispering]`, `[sarcastic]`, `[out of breath]`. Usa solo una etiqueta por línea; no combines más de dos.
- **Pausas:** Usa `...` para una pausa breve y natural dentro de una línea. Para una pausa más larga y deliberada entre líneas, usa un marcador explícito `[pause]` en su propia línea. Evita depender solo de los saltos de línea para indicar el ritmo.
- **Énfasis:** Envuelve una palabra enfatizada entre `*asteriscos*` en el guion (para el revisor humano/director de voz); conviértelo a la sintaxis de énfasis que soporte el motor de TTS elegido al momento de generar el audio.
- **Sonidos no verbales:** Los efectos de sonido y los sonidos no verbales del personaje (risas, suspiros, jadeos) se escriben como su propia indicación entre corchetes en su propia línea, por ejemplo `[laughs]`, `[gasps]`, no incrustados a mitad de una frase.
- **Sintaxis específica del motor:** La sintaxis exacta de etiquetas/pausas soportada debe verificarse contra la documentación actual de ElevenLabs (o el motor elegido) antes de la primera tanda de producción, ya que las etiquetas soportadas cambian con el tiempo. Este archivo define la *convención de autoría*, que puede traducirse a lo que el motor realmente soporte al momento de generar el audio.

## Lista de Revisión

- ¿Puedo reconocer a cada personaje de inmediato sin escuchar su nombre?
- ¿Suena Ajolote como un niño real y no como un adulto imitando a un niño?
- ¿Suena Xolo lo bastante distinto de Ajolote, con suficiente personalidad para que sus líneas secas resulten graciosas?
- ¿Suena la Abuela genuinamente mexicana y como una abuela, en lugar de una "abuela española genérica"?
- ¿Se siente natural el diálogo chilango, en lugar de forzado?
- ¿Son convincentes las interpretaciones emocionales?
- ¿Funciona el ritmo para niños (ni muy rápido, ni condescendiente)?
- ¿Hay demasiados efectos de sonido/etiquetas que saturan la interpretación?
- ¿Suenan todas las voces como si pertenecieran al mismo mundo?

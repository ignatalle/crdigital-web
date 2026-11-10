# crdigital-web — notas para Claude

Repositorio PÚBLICO. Nunca poner acá cobros, precios internos, datos de clientes, nombres de clientes ni claves.

- Sitio estático: `index.html`, `favicon.svg`, `robots.txt`, `sitemap.xml`, `netlify.toml`.
- Push a `main` = se publica en https://crdigitalar.com (Netlify, sitio `crdigital`, cuenta ignatallle@gmail.com).
- Hoy no hay JS. Si hace falta, va en `js/app.js` (la CSP permite scripts propios, nada externo; sin `connect-src`, así que cualquier API va por una función propia de Netlify).
- Casos de clientes siempre anónimos (sin nombre, lugar ni cifras reales). Las cifras de los mockups son de ejemplo y van marcadas "Datos de ejemplo".
- Rediseño 10/11/2026: identidad "estudio de software a medida", Argentina, remoto.

## Versión actual (10/11/2026, noche) — "tarjeta de presentación"
Objetivo: Igna manda el link a quien le pregunta a qué se dedica. En 10 segundos, desde el celular, se entiende qué hace, se ve un ejemplo real y hay un botón de WhatsApp.
- Dirección visual "Señal" con contraste: cabecera y contacto oscuros (`#16181D`, cuadrícula sutil), cuerpo claro `#F9F9F7`, Instrument Sans + Instrument Serif (itálica azul para remarcar), acento `#2563EB`. Logo: cuadrado claro con "CR" y barra azul. Arriba, un celular con el tablero de ejemplo.
- Voz en primera persona (Igna), sin fingir equipo. Sin precios. Sin mencionar el Ejército.
- 5 bloques: qué hago + WhatsApp + fundador · caso real (estaciones) con mockup · 3 situaciones (datos / a mano / arrancando) · cómo trabajo ("primero te digo si lo necesitás") · contacto.
- Pendiente: foto de Igna (hoy hay un círculo con "IC"). Living Studio (IA conversacional) quedó para más adelante; prototipo en Claude Design.

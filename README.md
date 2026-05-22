# Hacemos Cocina — Prototipo

Prototipo estático (HTML + JSX in-browser con Babel Standalone).
No build step, no framework.

## Estructura

- `Hacemos cocina - Home.html` — landing principal (servida en `/`)
- `Hacemos cocina - Mobile.html` — versión mobile en iOS frame (`/mobile`)
- `Hacemos cocina - Home offline.html` — versión offline (`/offline`)
- `Hacemos cocina - Home standalone.html` — bundle standalone (`/standalone`)
- `scripts/` — React components (.jsx, cargados con Babel Standalone)
- `styles/` — CSS
- `tokens.css` — design tokens (color, type, spacing)
- `assets/` — imágenes, iconos SVG, logos
- `fonts/` — Sole Repsol (Display + Text)

## Deploy a Vercel

### Opción A — Drag & drop (más rápido)

1. Entra en https://vercel.com/new
2. Arrastra la carpeta del proyecto.
3. Framework Preset: **Other**.
4. Build Command: *vacío*.
5. Output Directory: `.` (raíz).
6. Deploy.

### Opción B — CLI

```bash
npm i -g vercel
vercel login
vercel              # preview
vercel --prod       # producción
```

### URLs públicas (gracias a los rewrites de `vercel.json`)

| Ruta          | Sirve                                  |
| ------------- | -------------------------------------- |
| `/`           | `Hacemos cocina - Home.html`           |
| `/home`       | `Hacemos cocina - Home.html`           |
| `/mobile`     | `Hacemos cocina - Mobile.html`         |
| `/offline`    | `Hacemos cocina - Home offline.html`   |
| `/standalone` | `Hacemos cocina - Home standalone.html`|

## Notas

- Los nombres de archivo con espacios están bien: los `rewrites` exponen URLs limpias.
- Fuentes (`.ttf`) y assets se sirven con cache de 1 año (`immutable`).
- Los `.jsx` se sirven con `Content-Type: text/babel` para que el navegador no los rechace.
- `uploads/` y `screenshots/` están en `.vercelignore` — no se suben (son materiales de trabajo).

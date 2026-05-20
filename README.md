# Hacemos cocina · Prototipos

Prototipos interactivos en HTML/JSX para **Hacemos cocina** (Guía Repsol).

Es un sitio **100 % estático** — sin build, sin backend, sin dependencias instalables. Solo HTML, CSS y JSX transpilado en el navegador con Babel Standalone.

## Estructura

```
/
├── index.html                          ← landing con acceso a los dos prototipos
├── Hacemos cocina - Mobile.html        ← prototipo mobile (375 px, en iPhone)
├── Hacemos cocina - Home.html          ← prototipo desktop
├── ios-frame.jsx                       ← componente del bezel iOS
├── tokens.css                          ← variables de diseño
├── styles/                             ← estilos
│   ├── app.css
│   ├── sections.css
│   ├── auth.css
│   └── mobile.css
├── scripts/                            ← lógica React/JSX
│   ├── app.jsx
│   ├── auth.jsx
│   ├── data.js
│   ├── embajadores.jsx
│   ├── icons.jsx
│   ├── mobile-app.jsx
│   ├── private-area.jsx
│   ├── sections-1.jsx
│   └── sections-2.jsx
├── assets/                             ← imágenes, iconos, logos
├── fonts/                              ← tipografías
└── vercel.json                         ← config de Vercel (rewrites + cache)
```

## Probarlo en local

Necesitas un servidor estático cualquiera (no funciona abriendo el `.html` directamente con `file://` porque Babel hace `fetch` de los scripts).

```bash
# Opción 1: npx serve (no instala nada)
npx serve .

# Opción 2: Python
python3 -m http.server 3000

# Opción 3: Node http-server
npx http-server . -p 3000
```

Luego abre <http://localhost:3000>.

## Rutas

Vercel publica los archivos tal cual y además expone estas URLs limpias gracias a `vercel.json`:

| URL              | Prototipo                                    |
| ---------------- | -------------------------------------------- |
| `/`              | Landing con los dos accesos                  |
| `/mobile`        | Prototipo mobile (375 px, iPhone)            |
| `/home`          | Prototipo desktop                            |
| `/desktop`       | Alias del desktop                            |

## Deploy a Vercel

### Opción A — desde GitHub (recomendada)

1. Crea un repo nuevo en GitHub y sube esta carpeta:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:<usuario>/<repo>.git
   git push -u origin main
   ```

2. Entra en <https://vercel.com/new>, importa el repo y pulsa **Deploy**.

3. **Framework Preset:** `Other` (es estático). **Build command:** déjalo vacío. **Output directory:** déjalo vacío. Vercel detectará el `vercel.json` automáticamente.

4. Listo. Cada `git push` redeplaya.

### Opción B — Vercel CLI

```bash
npm i -g vercel
vercel              # primer deploy (preview)
vercel --prod       # deploy a producción
```

## Flujo del prototipo mobile

- **Home (deslogueado)** → click en *Regístrate* en el banner del hero o del footer CTA → **Registro**.
- **Registro completo** → vuelve a **Home**, ahora con foto de perfil en el header.
- **Click en la foto de perfil** → **Área privada**.
- **Click en el logo** desde Home logueada → cierra sesión.
- **Cerrar sesión** (link del side rail dentro del área privada) → vuelve a Home deslogueada.

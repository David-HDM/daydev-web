# DayDev web

Sitio informativo de DayDev. React + Vite. Todo el texto está en `src/content.js`.

## Uso local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist
```

## Publicar gratis en Netlify

1. Sube el proyecto a un repositorio de GitHub.
2. En netlify.com: "Add new project" → "Import an existing project" → GitHub → elige el repositorio.
3. Netlify lee `netlify.toml` (build `npm run build`, carpeta `dist`). Pulsa Deploy.
4. Tu sitio queda en una dirección `nombre.netlify.app`. Puedes cambiar el nombre en Site configuration → Change site name.
5. Cada `git push` a `main` publica automáticamente. Cada pull request genera una vista previa.

## CI

`.github/workflows/ci.yml` compila el proyecto en cada push y pull request.

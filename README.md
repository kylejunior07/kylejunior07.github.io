# Osmond Ezekwe — portfolio

A dark, bento-style personal portfolio for Osmond Ezekwe, product engineer.

Built with Vite, React and TypeScript, using plain CSS. There's no UI library and no animation library.

## Run locally

Requires Node 20+.

```bash
npm install
npm run dev       # http://localhost:5173/osmond-portfolio/
npm run build     # type-check and build to dist/
npm run preview   # serve the production build
```

## Editing content

All the copy lives in two files:

- `src/data/profile.ts`: name, intro, rotating roles, status pill, education, stack, interests, experience and contact links
- `src/data/projects.ts`: the five featured projects

Each project has a `repoUrl` and a `liveUrl`. Set either one to `null` to hide that link. Do this for a repo that's still private, or a demo that isn't deployed yet, so visitors don't hit a 404. The `size` field (`xl`, `md` or `sm`) controls the project's cell in the bento grid.

The poster images in the Generative Poster Maker card are real outputs from that project (`public/projects/`).

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages. In the repo's settings, set **Pages → Source** to **GitHub Actions**.

The Vite `base` path defaults to `/osmond-portfolio/`. For a custom domain or a `kylejunior07.github.io` user site, build with `BASE_PATH=/`.

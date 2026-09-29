# Osmond Ezekwe — portfolio

Live at **https://kylejunior07.github.io/** once the repo is renamed to `kylejunior07.github.io` (see [Deploying](#deploying)).

A dark, bento-style personal portfolio for Osmond Ezekwe, product engineer.

Built with Vite, React and TypeScript, using plain CSS. There's no UI library and no animation library.

## Run locally

Requires Node 20+.

```bash
npm install
npm run dev       # http://localhost:5173/
npm run build     # type-check and build to dist/
npm run preview   # serve the production build
```

## Editing content

All the copy lives in two files:

- `src/data/profile.ts`: name, intro, rotating roles, status pill, education, stack, interests, experience and contact links
- `src/data/projects.ts`: the five featured projects

Each project has a `demoUrl` (its playable build, see below) and an optional `repoUrl`. Leave `repoUrl` as `null` while a repo is private; set it to show a "Code" link. The `size` field (`xl`, `md` or `sm`) controls the project's cell in the bento grid.

## Playable demos

Visitors can use every featured project right on the site. **Try it** opens the live app in a full-screen overlay (on phones, it opens in a new tab).

The project repos stay private. Their built static files are committed to `public/demos/<slug>/` and deployed along with the portfolio. To refresh the demos after changing a project:

```bash
# expects the project repos cloned next to this one (or pass their parent folder)
scripts/build-demos.sh            # or: scripts/build-demos.sh ~/code
git add public/demos && git commit -m "Refresh demos"
```

The script builds each project with a relative base (`BASE_PATH=./`), which each project's `vite.config.ts` already reads. That means the demos work under any address: the site root, a sub-path or a custom domain. To add a new demo, add its slug to the `DEMOS` list in the script and add an entry to `src/data/projects.ts`.

The builds are minified with no source maps, so the readable source stays in the private repos.

The poster images in the Generative Poster Maker card are real outputs from that project (`public/projects/`).

## Deploying

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.

The workflow picks the base path from the repo name:

| Repo name | Site address |
|---|---|
| `kylejunior07.github.io` (the user site) | `https://kylejunior07.github.io/` |
| anything else, e.g. `osmond-portfolio` | `https://kylejunior07.github.io/osmond-portfolio/` |

One-time setup:

1. **Settings → General → Repository name:** rename the repo to `kylejunior07.github.io`. GitHub redirects the old URL and existing clones keep working.
2. **Settings → Pages → Source:** choose **GitHub Actions**.
3. Merge into `main`, or run the workflow from the Actions tab.

For a custom domain, add it under Settings → Pages; the root base path already fits.

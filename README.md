# Fauzan Edris — Portfolio

Personal portfolio for Fauzan Edris, built with Nuxt and generated as a static site. The public custom domain is served by Cloudflare Pages from the `main` branch; development takes place on `dev/main`.

## Getting started

Use a supported Node.js version (22.22.3 or newer in the 22.x line, 24.15.0 or newer in the 24.x line, or 26+) and pnpm 12.4.0:

```sh
pnpm install
pnpm dev
pnpm generate
```

Local static output is in `.output/public/`. On Cloudflare Pages, Nuxt selects the `cloudflare-pages-static` preset and outputs to `dist`. The Cloudflare project uses the `main` branch, build command `pnpm generate`, output directory `dist`, an empty root directory, `NODE_VERSION=26.13.0` and `PNPM_VERSION=12.4.0`. Review changes before publishing. The repository also has a GitHub Pages workflow, but the custom domain currently points to Cloudflare Pages.

## Project documentation

- [Project context](docs/PROJECT_CONTEXT.md): goals, verified content, and constraints for any contributor or AI assistant.
- [Decision log](docs/DECISIONS.md): important technical and editorial decisions.
- [Work status](docs/STATUS.md): current progress, checks and next steps. Update this when meaningful work is completed.

Update project descriptions in `app/data/projects.js`. Projects with a slug and overview have detail pages under `app/pages/projects/`; add a matching screenshot under `public/images/projects/` when adding pages. `pnpm generate` updates `public/sitemap.xml` from these project records and the homepage. If additional standalone routes are added, include them in `scripts/generate-sitemap.mjs`. The list component is in `app/components/`, and styles are in `app/assets/css/`. Never commit credentials, private career notes, or private employer code.

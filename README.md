# Fauzan Edris — Portfolio

Personal portfolio for Fauzan Edris, built with Nuxt and generated as a static site for GitHub Pages. The current published site remains in `index.html` while the Nuxt version is developed on `dev/main`.

## Getting started

Use a supported Node.js version (22.22.3 or newer in the 22.x line, 24.15.0 or newer in the 24.x line, or 26+) and pnpm 12.4.0:

```sh
pnpm install
pnpm dev
pnpm generate
```

The generated website is in `.output/public/`. Review it locally before publishing. GitHub Pages must be configured to deploy using GitHub Actions before the workflow can publish; it only deploys from `main` or when manually requested.

## Project documentation

- [Project context](docs/PROJECT_CONTEXT.md): goals, verified content, and constraints for any contributor or AI assistant.
- [Decision log](docs/DECISIONS.md): important technical and editorial decisions.
- [Work status](docs/STATUS.md): current progress, checks and next steps. Update this when meaningful work is completed.

Update project descriptions in `app/data/projects.js`. Projects with a slug and overview have detail pages under `app/pages/projects/`; add their URLs to `public/sitemap.xml` and a matching screenshot under `public/images/projects/` when adding pages. The list component is in `app/components/`, and styles are in `app/assets/css/`. Never commit credentials, private career notes, or private employer code.

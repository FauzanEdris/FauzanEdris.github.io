# Work status

Updated: 2026-11-08

- Current development branch: `dev/main`. The existing static HTML remains the current live-site source.
- Shared, tool-neutral project documentation and an initial Nuxt migration are in place. Project descriptions now live in `app/data/projects.js`, rendered by `app/components/ProjectList.vue`; further content and design work remains.
- Node 26.13.0 and pnpm 12.4.0 were used successfully. A frozen install and `pnpm generate` passed on the existing local installation. Generated HTML contains all five project titles, the canonical link and Person structured data. A clean install and the GitHub deployment workflow have not been tested.
- Before release: verify generated pages, canonical URLs, sitemap and robots, check mobile and keyboard use, then review GitHub Pages deployment settings and custom domain. Publishing requires Fauzan's authorization.
- The previous PageSpeed mobile report scored 100 performance and 91 SEO; the reported robots.txt returned HTML. Check the deployed response after migration, including any CDN rewrite or caching.

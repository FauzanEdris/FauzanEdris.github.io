# Work status

Updated: 2026-11-08

- Current development branch: `dev/main`. The existing static HTML remains the current live-site source.
- Shared, tool-neutral project documentation and an initial Nuxt migration are in place. The existing content has been moved into a Nuxt page, but still needs to be split into maintainable components and project data.
- Node 26.13.0 and pnpm 12.4.0 were used successfully. The pnpm lockfile was generated, esbuild's install script was explicitly approved, and `pnpm generate` successfully produced `.output/public`. Validate a frozen install and the deployment workflow before release.
- Before release: verify generated pages, canonical URLs, sitemap and robots, check mobile and keyboard use, then review GitHub Pages deployment settings and custom domain. Publishing requires Fauzan's authorization.
- The previous PageSpeed mobile report scored 100 performance and 91 SEO; the reported robots.txt returned HTML. Check the deployed response after migration, including any CDN rewrite or caching.

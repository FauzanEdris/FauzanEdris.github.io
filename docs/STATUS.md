# Work status

Updated: 2026-11-08

- Current development branch: `dev/main`. The existing static HTML remains the current live-site source.
- Project descriptions live in `app/data/projects.js`. Jeg Kit, Profecient, Magnitude, JNews, and Gutenverse have separate detail pages, product links, and landing-page screenshots captured in November 2026. Some Gutenverse contributions are explicitly marked as having unconfirmed release status. The thesis project has no confirmed public URL or screenshot.
- Node 26.13.0 and pnpm 12.4.0 were used successfully. A frozen install and `pnpm generate` passed on the existing local installation. The three project detail routes were generated with titles, canonical URLs, and contribution text. At 375px width the four pages loaded without horizontal document overflow and displayed the expected headings and canonical URLs; one initial Tab focus was checked. This is not a full accessibility or visual audit. A clean install and the GitHub deployment workflow have not been tested.
- Before release: verify generated pages, canonical URLs, sitemap and robots, check mobile and keyboard use, then review GitHub Pages deployment settings and custom domain. Publishing requires Fauzan's authorization.
- All five detail pages generated successfully; a browser check confirmed their titles and canonical URLs. Screenshots were recaptured at a 1440×900 desktop viewport without scrollbars and converted to WebP. A full accessibility audit and deployment verification remain.
- Follow-up local browser check: the home page and all five detail pages each loaded with one H1, the expected canonical URL, no document overflow at the browser's current viewport, and working screenshot responses. Generated robots.txt and sitemap contain the expected public paths. Automated click/keyboard navigation checks timed out while waiting for link stability; they are not yet verified. The GitHub Actions workflow and live CDN responses remain untested.
- The previous PageSpeed mobile report scored 100 performance and 91 SEO; the reported robots.txt returned HTML. Check the deployed response after migration, including any CDN rewrite or caching.

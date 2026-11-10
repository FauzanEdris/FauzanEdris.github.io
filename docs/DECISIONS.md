# Decisions

- Use Nuxt with static generation and Cloudflare Pages for the custom domain; the repository remains on GitHub. Cloudflare's preset outputs `dist`, while a local build outputs `.output/public`.
- Use pnpm to share dependency files across projects where supported; commit its lockfile and use frozen installs in CI.
- Generate the sitemap from the homepage and project records during static generation; keep standalone routes in the generator and validate project slugs.
- Keep shared project context in ordinary Markdown files, with `AGENTS.md` as a short entry point. Other assistants can be directed to the same README; do not duplicate the facts in tool-specific instruction files.
- Keep public project facts separate from private career-context documents. Use verified contributions and avoid claims about team products being built alone.
- Use English for the initial website and LinkedIn/GitHub for contact. The work WordPress.org account is only a historical project reference.
- Maintain the current HTML until the Nuxt version is reviewed and ready for an explicitly authorized deployment.

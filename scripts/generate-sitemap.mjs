import { writeFile } from 'node:fs/promises'
import { projects } from '../app/data/projects.js'

const origin = 'https://fauzanedris.my.id'
const slugs = projects.filter(project => project.slug && project.overview).map(project => project.slug)
if (slugs.some(slug => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) || new Set(slugs).size !== slugs.length) {
  throw new Error('Project slugs must be unique and use lowercase letters, numbers, and hyphens.')
}
const paths = ['/', ...slugs.map(slug => `/projects/${slug}/`)]
const entries = paths.map(path => `  <url><loc>${origin}${path}</loc></url>`).join('\n')
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`
await writeFile(new URL('../public/sitemap.xml', import.meta.url), xml, 'utf8')
console.log(`Generated sitemap with ${paths.length} URLs.`)

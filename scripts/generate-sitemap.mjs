import { writeFile } from 'node:fs/promises'
import { projects } from '../app/data/projects.js'
import { getProjectPaths } from '../app/data/project-routes.js'

const origin = 'https://fauzanedris.my.id'
const paths = ['/', ...getProjectPaths(projects)]
const entries = paths.map(path => `  <url><loc>${origin}${path}</loc></url>`).join('\n')
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`
await writeFile(new URL('../public/sitemap.xml', import.meta.url), xml, 'utf8')
console.log(`Generated sitemap with ${paths.length} URLs.`)

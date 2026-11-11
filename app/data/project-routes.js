/** Public project routes shared by the sitemap and Nuxt prerendering. */
export function getProjectPaths(projects) {
  const slugs = projects.filter(project => project.slug && project.overview).map(project => project.slug)
  if (slugs.some(slug => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) || new Set(slugs).size !== slugs.length) {
    throw new Error('Project slugs must be unique and use lowercase letters, numbers, and hyphens.')
  }
  return slugs.map(slug => `/projects/${slug}/`)
}

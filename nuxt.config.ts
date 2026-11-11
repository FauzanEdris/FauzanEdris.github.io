import { projects } from './app/data/projects.js'
import { getProjectPaths } from './app/data/project-routes.js'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  app: { head: { htmlAttrs: { lang: 'en' }, link: [{ rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon.png' }] } },
  nitro: { prerender: { routes: ['/', ...getProjectPaths(projects)], failOnError: true } },
})

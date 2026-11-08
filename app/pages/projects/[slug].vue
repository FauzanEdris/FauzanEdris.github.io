<script setup>
import { projects } from '~/data/projects'

const route = useRoute()
const project = projects.find(item => item.slug === route.params.slug && item.overview)
if (!project) throw createError({ statusCode: 404, statusMessage: 'Project not found' })

const canonical = `https://fauzanedris.my.id/projects/${project.slug}/`
useSeoMeta({
  title: `${project.title} — Fauzan Edris`,
  description: project.description,
  ogTitle: `${project.title} — Fauzan Edris`,
  ogDescription: project.description,
  ogType: 'website',
  ogUrl: canonical,
  twitterCard: 'summary',
})
useHead({ link: [{ rel: 'canonical', href: canonical }] })
</script>

<template>
  <div>
    <header>
      <nav class="wrap" aria-label="Main navigation">
        <NuxtLink class="brand" to="/">fauzan<span>.</span></NuxtLink>
        <div class="nav-links"><NuxtLink to="/#work">Work</NuxtLink><NuxtLink to="/#about">About</NuxtLink><NuxtLink to="/#contact">Contact</NuxtLink></div>
      </nav>
    </header>
    <main class="wrap project-detail">
      <NuxtLink class="text-link back-link" to="/#work">← All projects</NuxtLink>
      <div class="eyebrow">{{ project.category }} · JEGSTUDIO</div>
      <h1>{{ project.title }}</h1>
      <p class="detail-lead">{{ project.overview }}</p>
      <figure class="project-screenshot">
        <img :src="`/images/projects/${project.slug}.webp`" :alt="`Screenshot of the ${project.title} website landing page`" width="1440" height="900" loading="lazy" decoding="async">
        <figcaption>Product website landing page, captured November 2026.</figcaption>
      </figure>
      <div class="detail-grid">
        <div><div class="section-label">Role</div><p>{{ project.role }}</p><div class="section-label">Technologies</div><p>{{ project.technologies.join(' / ') }}</p></div>
        <section aria-labelledby="contributions"><h2 id="contributions">My contributions</h2><ul><li v-for="item in project.contributions" :key="item">{{ item }}</li></ul><p class="detail-note">This was a team product. These examples describe my contributions.</p><p v-if="project.note" class="detail-note">{{ project.note }}</p><p v-if="project.links?.length"><template v-for="link in project.links" :key="link.url"><a class="text-link detail-external" :href="link.url">{{ link.label }} ↗</a></template></p></section>
      </div>
      <NuxtLink class="text-link" to="/#work">← Back to selected work</NuxtLink>
    </main>
    <footer><div class="wrap"><span>© Fauzan Edris</span><span>Made in Bali, Indonesia.</span></div></footer>
  </div>
</template>

<script setup>
import { projects } from '~/data/projects'
</script>

<template>
  <article v-for="(project, index) in projects" :key="project.title" class="project">
    <div class="project-meta">
      <span class="project-number">{{ String(index + 1).padStart(2, '0') }} / {{ project.category }}</span>
      {{ project.role }}
    </div>
    <div>
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="tags">{{ project.technologies.join(' / ') }}</div>
      <p v-if="project.slug"><NuxtLink class="text-link" :to="`/projects/${project.slug}/`">Explore {{ project.title }} ↗</NuxtLink></p>
      <p v-if="project.links?.length">
        <template v-for="(link, linkIndex) in project.links" :key="link.url">
          <span v-if="linkIndex"> · </span><a class="text-link" :href="link.url">{{ link.label }} ↗</a>
        </template>
      </p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Project } from '~/types/developer'

defineProps<{ project: Project, index: number }>()
</script>

<template>
  <div class="project lg:mx-5">
    <span class="flex text-sm my-3">
      <h2 class="text-purplefy font-fira_bold mr-3">Project {{ index + 1 }}</h2>
      <h3 class="font-fira_retina text-menu-text text-sm"> // {{ project.title }}</h3>
    </span>

    <div
      id="project-card"
      class="flex flex-col"
    >
      <div id="window">
        <div class="absolute flex right-3 top-3">
          <img
            v-for="tech in project.tech"
            :key="tech"
            :src="`/icons/techs/filled/${tech.toLowerCase()}.svg`"
            :alt="tech"
            class="w-6 h-6 mx-1 hover:opacity-75"
          >
        </div>
        <img
          id="showcase"
          :src="project.img"
          :alt="project.title"
        >
      </div>

      <div class="pb-8 pt-6 px-6 border-top">
        <p class="text-menu-text font-fira_retina text-sm mb-5">
          {{ project.description }}
        </p>
        <a
          id="view-button"
          :href="project.url"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="`View project ${project.title}`"
          class="text-white font-fira_retina py-2 px-4 w-fit text-xs rounded-lg"
        >
          view-project
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project {
  min-width: 400px;
  margin-bottom: 5px;
}

#project-card {
  border: 1px solid #1E2D3D;
  background-color: #011221;
  border-radius: 15px;
  max-width: 400px;
}

#window {
  max-height: 120px;
  position: relative;
  overflow: hidden;
}

#showcase {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}

@media (max-width: 768px) {
  .project {
    min-width: 100%;
  }
}

@media (min-width: 768px) {
  .project {
    width: 100%;
    min-width: 100%;
    padding-inline: 5px;
  }
}

@media (min-width: 1350px) {
  .project {
    width: 100%;
    min-width: 100%;
    padding-inline: 20px;
  }
}
</style>

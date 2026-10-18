<script setup lang="ts">
import type { Project } from '#shared/types/developer'

const techs = ['React', 'HTML', 'CSS', 'Vue', 'Angular', 'Gatsby', 'Flutter']
const allProjects: Project[] = Object.values(developerConfig.projects)

useHead({ title: 'Projects' })

const filters = ref<string[]>(['all'])
const showFilters = ref(true)

const projects = computed<Project[]>(() => {
  if (filters.value[0] === 'all') return allProjects
  return allProjects.filter(project => filters.value.some(filter => project.tech.includes(filter)))
})

function filterProjects(tech: string, checked: boolean) {
  if (checked) {
    filters.value = [...filters.value.filter(item => item !== 'all'), tech]
  }
  else {
    filters.value = filters.value.filter(item => item !== tech)
    if (filters.value.length === 0) filters.value = ['all']
  }
}
</script>

<template>
  <main class="flex flex-col flex-auto lg:flex-row overflow-hidden">
    <h1 class="sr-only">
      Projects
    </h1>
    <div id="mobile-page-title">
      <h2>_projects</h2>
    </div>

    <!-- section title (mobile) -->
    <button
      type="button"
      class="section-content-title flex lg:hidden w-full text-left"
      :aria-expanded="showFilters"
      aria-controls="filter-menu"
      @click="showFilters = !showFilters"
    >
      <img
        :class="showFilters ? 'section-arrow rotate-90' : 'section-arrow'"
        src="/icons/arrow.svg"
        alt=""
      >
      <span class="font-fira_regular text-white text-sm">projects</span>
    </button>

    <div
      v-if="showFilters"
      id="filter-menu"
      class="w-full flex-col border-right font-fira_regular text-menu-text lg:flex"
    >
      <!-- title -->
      <div class="section-content-title hidden lg:flex items-center min-w-full">
        <img
          src="/icons/arrow.svg"
          alt=""
          class="section-arrow mx-3"
        >
        <p class="font-fira_regular text-white text-sm">
          projects
        </p>
      </div>

      <!-- filter menu -->
      <nav
        id="filters"
        aria-label="Filter projects by technology"
        class="w-full flex-col"
      >
        <div
          v-for="tech in techs"
          :key="tech"
          class="flex items-center py-2"
        >
          <input
            :id="tech"
            type="checkbox"
            :checked="filters.includes(tech)"
            @change="filterProjects(tech, ($event.target as HTMLInputElement).checked)"
          >
          <img
            :id="'icon-tech-' + tech"
            :src="`/icons/techs/${tech.toLowerCase()}.svg`"
            alt=""
            class="tech-icon w-5 h-5 mx-4"
            :class="{ active: filters.includes(tech) }"
          >
          <label
            :id="'title-tech-' + tech"
            :for="tech"
            :class="{ active: filters.includes(tech) }"
          >{{ tech }}</label>
        </div>
      </nav>
    </div>

    <!-- content -->

    <div class="flex flex-col w-full overflow-hidden">
      <!-- windows tab -->
      <div class="tab-height w-full hidden lg:flex border-bot items-center">
        <div class="flex items-center border-right h-full">
          <p
            v-for="filter in filters"
            :key="filter"
            class="font-fira_regular text-menu-text text-sm px-3"
          >
            {{ filter }};
          </p>
          <img
            src="/icons/close.svg"
            alt=""
            class="m-3"
          >
        </div>
      </div>

      <!-- windows tab mobile -->
      <div
        id="tab"
        class="flex lg:hidden items-center"
      >
        <span class="text-white"> // </span>
        <p class="font-fira_regular text-white text-sm px-3">
          projects
        </p>
        <span class="text-menu-text"> / </span>
        <p
          v-for="filter in filters"
          :key="filter"
          class="font-fira_regular text-menu-text text-sm px-3"
        >
          {{ filter }};
        </p>
      </div>

      <!-- projects -->
      <div
        id="projects-case"
        class="grid-cols-1 lg:grid-cols-2 max-w-full h-full overflow-scroll lg:self-center"
        :class="{ grid: projects.length > 0 }"
      >
        <div
          v-show="projects.length === 0"
          id="not-found"
          class="flex flex-col font-fira_retina text-menu-text my-5 h-full justify-center items-center"
        >
          <span class="flex justify-center text-4xl pb-3">
            X__X
          </span>
          <span class="text-white flex justify-center text-xl">
            No matching projects
          </span>
          <span class="flex justify-center">
            for these technologies
          </span>
        </div>

        <ProjectCard
          v-for="(project, index) in projects"
          :key="project.title + index"
          :index="index"
          :project="project"
        />
      </div>
    </div>
  </main>
</template>

<style>
#filters {
  padding: 10px 25px;
}

#tab {
  padding: 25px 25px 5px;
  flex-wrap: wrap;
}

.tech-icon {
  opacity: 0.4;
}

.tech-icon.active {
  opacity: 1;
}

#title-tech.active {
  color: white;
}

#view-button {
  background-color: #1C2B3A;
}

#view-button:hover {
  background-color: #263B50;
}

input[type="checkbox"] {
  appearance: none;
  background-color: transparent;
  width: 1.15em;
  height: 1.15em;
  border: 2px solid currentColor;
  border-radius: 0.15em;
  margin-top: 1px;
}

input[type="checkbox"]:checked {
  background-color: currentColor;
  background-image: url("data:image/svg+xml;utf8,<svg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.38587 7.2802L11.9718 0.693573L12.9856 1.70668L5.38587 9.30641L0.826172 4.74671L1.83928 3.73361L5.38587 7.2802Z' fill='white'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
}

input[type="checkbox"]:checked:hover {
  box-shadow: #607b968b 0px 0px 0px 2px;
}

input[type="checkbox"]:not(:checked) {
  border-color: currentColor;
}

input[type="checkbox"]:hover {
  cursor: pointer;
  background-color: currentColor;
  background-image: url("data:image/svg+xml;utf8,<svg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.38587 7.2802L11.9718 0.693573L12.9856 1.70668L5.38587 9.30641L0.826172 4.74671L1.83928 3.73361L5.38587 7.2802Z' fill='white'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: #607b968b 0px 0px 0px 2px;
}

input[type="checkbox"]:hover:not(:checked) {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  background-image: none;
  box-shadow: #607b968b 0px 0px 0px 2px;
}

input[type="checkbox"]:focus {
  box-shadow: none;
}

@media (max-width: 768px) {
  #projects-case {
    padding: 0px 25px 40px;
  }

}

@media (min-width: 768px) {
  #projects-case {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 50px 50px 40px;
  }
}

@media (min-width: 1350px) {
  #projects-case {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 50px 80px 40px;
    /* padding: 100px 100px 40px; */
  }
}

@keyframes animateToBottom {
  from {
    transform: translate3d(0, -200px, 0);
  }

  to {
    transform: translate3d(0, 10px, 0);
  }
}
</style>

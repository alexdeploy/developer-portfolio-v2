<template>
  <section class="lg:flex block max-h-full h-full overflow-hidden w-full">

    <!-- mobile title -->
    <div id="mobile-page-title" class="flex lg:hidden">
      <h2>_projects</h2>
    </div>

    <!-- section title (mobile) -->

      <div id="section-content-title" class="flex lg:hidden" @click="hiddeSection()">
        <img class="section-arrow" src="/icons/arrow.svg">
        <p class="font-fira_regular text-white text-sm">projects</p>
      </div>
  
      <!-- filter menu -->
      <nav id="filter-menu" class="w-full flex-col border-right font-fira_regular text-menu-text hidden lg:flex">
        <div v-for="tech in techs" :key="tech" class="flex items-center py-2">
          <input type="checkbox" :id="tech" @click="filterProjects(tech)">
          <img :src="'/icons/techs/' + tech + '.svg'" alt="" class="w-5 h-5 mx-4">
          <span>{{ tech }}</span>
        </div>
      </nav>

    <!-- content -->

    <div class="flex flex-col w-full">
      
      <!-- windows tab -->
      <div class="tab-height w-full hidden lg:flex border-bot items-center">
        <div class="flex items-center border-right h-full">
          <p v-for="filter in filters" :key="filter" class="font-fira_regular text-menu-text text-sm px-3">{{ filter }};</p>
          <img src="/icons/close.svg" alt="" class="m-3">
        </div>
      </div>

      <!-- windows tab mobile -->
      <div class="tab-height flex lg:hidden items-center m-5">
          <span class="text-white"> // </span>
          <p class="font-fira_regular text-white text-sm px-3">projects</p>
          <span class="text-menu-text"> / </span>
          <p v-for="filter in filters" :key="filter" class="font-fira_regular text-menu-text text-sm px-3">{{ filter }};</p>
      </div>

      <!-- projects -->
      <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 max-w-full m-6 lg:m-16">
        <div v-for="(project, key, index) in projects" :key="key" class="lg:p-5">

          <!-- title -->
          <span class="flex text-sm my-3">
            <h3 class="text-purplefy font-fira_bold mr-3">Project {{ index + 1 }} </h3>
            <h4 class="font-fira_retina text-menu-text"> // {{ project.title }}</h4>
          </span>

          <!-- info -->
          <div id="project-card" class="flex flex-col">
            <div id="window">
              <img id="showcase" :src="project.img" alt="" class="">
            </div>

            <div class="p-8 border-top">
              <p class="text-menu-text font-fira_retina text-sm">
                {{ project.description }}
              </p>
              <button id="view-button" class="text-white font-fira_retina py-2 px-4 w-fit text-xs rounded-lg mt-5">
                  view-project
              </button>
            </div>
          </div>
        </div>
      </div>
  </div>
  </section>
</template>

<style>

#filter-menu {
  padding: 10px 25px;
}

#project-card {
  border: 1px solid #1E2D3D;
  background-color: #011221;
  border-radius: 15px;
  max-width: 370px;
}

#showcase {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}

#view-button {
  background-color: #1C2B3A;
}

#window {
  max-height: 150px;
  overflow: hidden;
}

input[type="checkbox"] {
  appearance: none;
  background-color: transparent;
  width: 1.15em;
  height: 1.15em;
  border: 2px solid currentColor;
  border-radius: 0.15em;
}

input[type="checkbox"]:checked {
  background-color: currentColor;
  background-image: url("data:image/svg+xml;utf8,<svg width='13' height='10' viewBox='0 0 13 10' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.38587 7.2802L11.9718 0.693573L12.9856 1.70668L5.38587 9.30641L0.826172 4.74671L1.83928 3.73361L5.38587 7.2802Z' fill='white'/></svg>");
  background-repeat: no-repeat;
  background-position: center;
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
}

input[type="checkbox"]:hover:not(:checked) {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
  background-image: none;
}

input[type="checkbox"]:focus {
  box-shadow: none;
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

<script>
export default {
  data() {
    return {
      techs: ['React', 'HTML', 'CSS', 'Vue', 'Angular', 'Gatsby', 'Flutter'],
      filters: ['all'],
      projects: '',
    };
  },
  setup() {
    const config = useRuntimeConfig()
    return {
      config
    }
  },
  mounted() {
    this.projects = this.config.public.dev.projects;
  },
  methods: {
    filterProjects(tech) {
      console.log(tech);
      const check = document.getElementById(tech);
      if (check.checked) {
        this.filters = this.filters.filter((item) => item !== 'all'); // remove 'all' from filters
        this.filters.push(tech) // add tech to filters
      } else {
        this.filters = this.filters.filter((item) => item !== tech); // remove tech from filters
        this.filters.length === 0 ? this.filters.push('all') : null; // add 'all' to filters if filters is empty
      }
      
      this.filters[0] == 'all' ? this.projects = this.config.public.dev.projects : this.projects = this.filterProjectsBy(this.filters);
      console.log(this.filters);
      console.log(this.projects);
      
    },
    hiddeSection() {
      document.getElementById('filter-menu').classList.toggle('hidden');
      document.getElementById('section-arrow').classList.toggle('rotate-90');
    },
    filterProjectsBy(filters) {
      const projectArray = Object.values(this.config.public.dev.projects);
      return projectArray.filter(project => {
        return filters.every(filter => project.tech.includes(filter));
      });
    }
  },
};

</script>

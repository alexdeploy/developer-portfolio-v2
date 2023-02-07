<template>
  <section class="lg:flex block max-h-full h-full overflow-hidden w-full">

    <!-- menu -->
    <nav id="page-menu" class="w-full h-auto flex flex-col border-right font-fira_regular text-menu-text">
      <div v-for="tech in techs" :key="tech" class="flex items-center">
        <input type="checkbox" class="m-4">
        <img :src="'/icons/techs/' + tech + '.svg'" alt="" class="w-5 h-5 mr-3">
        <span>{{ tech }}</span>
      </div>
    </nav>

    <!-- content -->
    <div class="grid grid-cols-3 w-full m-16">
      <div v-for="(project, key, index) in config.public.dev.projects" :key="key" class="p-5">

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

  </section>
</template>

<style>
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
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 1.15em;
  height: 1.15em;
  border: 2px solid currentColor;
  border-radius: 0.15em;
  transform: translateY(-0.075em);
  margin: 10px;
}
</style>

<script>
export default {
  data() {
    return {
      techs: ['React', 'HTML', 'CSS', 'Vue', 'Angular', 'Gatsby', 'Flutter']
    };
  },
  setup() {
    const config = useRuntimeConfig()
    return {
      config
    }
  },
};

</script>

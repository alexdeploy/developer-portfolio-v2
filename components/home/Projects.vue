<template>
  <!-- projects header -->
  <div id="projects-header" class="section-header">
    <img src="icons/folder.svg" alt="" class="w-7 h-7">
    <p class="self-end font-sfbold">Projects</p>
  </div>

    <section id="projects" class="p-5 z-10">
      
      <!-- title -->
      <div class="pb-16">
        <h1 class="text-2xl md:text-4xl font-sfbold">
            Some things I've built.
        </h1>
        <div class="flex">
          <p class="tracking-wider dark:text-glitch-blue">
            Featured Projects
          </p>
          <div>
            
          </div>
        </div>
      </div>
      
      <!-- project cards -->
      <div class="space-y-10">
        <containerProjectCard2 
        icon="projects/nuxt-pwa.png"
        title="Nuxt PWA Template"
        subtitle="Open source PWA template"
        description="This is a template for Nuxt.js 3.0 projects with PWA advanced support and configuration."
        repo="https://github.com/alexruedadev/nuxt-pwa-template"
        />

        <containerProjectCard2
        icon="projects/jukebox.png"
        title="Jukebox"
        subtitle="Discord Music Bot"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        repo="https://github.com/alexruedadev/jukebox-discord"
        />

        <containerProjectCard
        icon="projects/jukebox.png"
        title="Jukebox"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        repo="https://github.com/alexruedadev/jukebox-discord"
        />

        <containerProjectCard
        icon="projects/jukebox.png"
        title="Jukebox"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        repo="https://github.com/alexruedadev/jukebox-discord"
        />
      </div>

      

    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
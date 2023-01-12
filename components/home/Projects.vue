<template>
  <!-- projects header -->
  <div id="projects-header" class="flex fixed w-full -top-60 z-30 px-5 pt-2 pb-4 space-x-3">
      <img src="images/avatar.gif" alt="" class="w-12">
      <p class="self-end font-sfbold">Projects</p>
    </div>

    <section id="projects" class="p-5">
      
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
        <containerProjectCard 
        icon="projects/nuxt-pwa.png"
        title="Nuxt PWA Template"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        repo="https://github.com/alexruedadev/nuxt-pwa-template"
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
<template>
  <main class="flex flex-col max-w-7xl mx-auto">
    <!-- <div id="filter-blur" class="h-screen w-full fixed top-0 bg-black/20 z-10"></div> -->
    <HomeHero />
    <HomeAbout />
    <HomeProjects />
  </main>
</template>

<script>

export default {

  mounted(){

    /**
     * * Get sections start position
     * Get the start position of each section and substract 100px to the top to show the navbar before.
     */
    const heroStart = document.querySelector('#hero').offsetTop - 100
    const aboutStart = document.querySelector('#about').offsetTop - 100
    const projectsStart = document.querySelector('#projects').offsetTop - 100
    
    /**
     * * Get sections height
     * Get the height of each section to show the navbar when the scroll is between this section.
     */
    const heroHeight = document.querySelector('#hero').offsetHeight
    const aboutHeight = document.querySelector('#about').offsetHeight
    const projectsHeight = document.querySelector('#projects').offsetHeight

    /**
     * * ON SCROLL Eventº
     */
    window.onscroll = () => {

      const scrollPosition = window.scrollY
      
      const aboutHeader = document.querySelector('#about-header')
      const projectsHeader = document.querySelector('#projects-header')

      // Show and hide navbar when scroll is between hero section
      if(scrollPosition >= heroStart && scrollPosition <= heroStart + heroHeight){
        document.getElementById("navbar").style.top = "0";
      } else {
        document.getElementById("navbar").style.top = "-80px";
      }

      // Show and hide navbar when scroll is between about section
      if(scrollPosition >= aboutStart && scrollPosition <= aboutStart + aboutHeight){
        aboutHeader.style.top = "0px"; // Show about header
      } else {
        aboutHeader.style.top = "-80px"; // Hide about header
      }

      // Show and hide navbar when scroll is between projects section
      if(scrollPosition >= projectsStart && scrollPosition <= projectsStart + projectsHeight){
        projectsHeader.style.top = "0px"; // Show projects header
      } else {
        projectsHeader.style.top = "-80px"; // Hide projects header
      }

    }

  }
}

</script>

<style>

.section-header {
  @apply flex fixed w-full -top-60 z-30 px-5 py-4 space-x-3 shadow-md left-0;
  background: rgba(5,19,30,0.7);
  backdrop-filter: blur(10px);
}

</style>


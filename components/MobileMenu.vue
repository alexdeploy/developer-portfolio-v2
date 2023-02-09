<template>
  <div id="mobile-menu" class="w-full z-10 lg:hidden">

    <!-- header -->
    <div id="mobile-header" class="w-full h-16 flex justify-between items-center">
      <NuxtLink class="text-menu-text font-fira_retina flex h-full items-center mx-5">
        alex-rueda
      </NuxtLink>
      <Icon @click="toggleMobileMenu()" name="icon-park-outline:hamburger-button" class="w-7 h-7 mx-5 my-auto text-hello-gray" />
    </div>

    <!-- mobile menu -->
      <div id="menu" class="bg-mobile-menu-blue z-10 hidden">
        <NuxtLink id="nav-link-mobile" to="/" :class="{ active: isActive('/') }" @click="toggleMobileMenu()">
          _hello
        </NuxtLink>
  
        <NuxtLink id="nav-link-mobile" to="/about-me" :class="{ active: isActive('/about-me') }" @click="toggleMobileMenu()">
          _about-me
        </NuxtLink>
  
        <NuxtLink id="nav-link-mobile" to="/projects" :class="{ active: isActive('/projects') }" @click="toggleMobileMenu()">
          _projects
        </NuxtLink>

        <NuxtLink id="nav-link-mobile" to="/contact-me" :class="{ active: isActive('/contact-me') }" @click="toggleMobileMenu()">
          _contact-me
        </NuxtLink>
    </div>

  </div>
</template>

<script>
export default {
  mounted(){
    
  },
  methods: {
    toggleMobileMenu(){

      const menu = document.getElementById('menu');
      menu.classList.toggle('hidden')
      const section = document.getElementsByTagName('section')[0];
      section.classList.toggle('hidden')
      
    }
  },
  computed: {
    // Set active class to current page link
    isActive() {
      return route => this.$route.path === route;
    }
  }
}
</script>

<style>

#mobile-header {
  border-bottom: 1px solid #1E2D3D;
}

#nav-link-mobile {
  border-bottom: 1px solid #1E2D3D;
  @apply text-menu-text font-fira_retina px-6 py-4 flex items-center;
}

#nav-link-mobile.active {
  color: white
}

</style>
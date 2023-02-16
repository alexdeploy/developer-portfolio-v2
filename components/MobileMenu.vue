<template>
  <div id="mobile-menu" class="w-full z-10 lg:hidden">

    <!-- header -->
    <div id="mobile-header" class="w-full h-16 flex justify-between items-center">
      <NuxtLink class="text-menu-text font-fira_retina flex h-full items-center mx-5" to="/" @click="goHome()">
        {{ config.dev.logo_name }}
      </NuxtLink>
      <img src="/icons/burger.svg" v-if="!menuOpen" @click="toggleMobileMenu()" class="w-5 h-5 mx-5 my-auto"/>
      <img src="/icons/burger-close.svg" v-else @click="toggleMobileMenu()" name="icon-park-outline:close" class="w-5 h-5 mx-5 my-auto"/>
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
  data(){
    return {
      menuOpen: false
    }
  },
  setup() {
    const config = useRuntimeConfig()

    return {
      config
    }
  },
  methods: {
    toggleMobileMenu(){

      this.menuOpen ? this.menuOpen = false : this.menuOpen = true

      const menu = document.getElementById('menu');
      menu.classList.toggle('hidden')

      const page = document.getElementsByTagName('main')[0];
      // Hide / show section
      if (page.style.display === 'none') {
        page.style.display = 'flex';
      } else {
        page.style.display = 'none';
      }
    },
    goHome() {
      const menu = document.getElementById('menu');
      if(!menu.classList.contains('hidden')){
        menu.classList.toggle('hidden')
        document.getElementsByTagName('main')[0].style.display = 'flex';
        this.menuOpen ? this.menuOpen = false : this.menuOpen = true
      }
    }
  },
  computed: {
    // Set active class to current page link
    isActive() {
      return route => this.$route.path === route;
    },
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
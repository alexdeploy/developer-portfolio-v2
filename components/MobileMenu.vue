<template>
  <div class="mobile-menu w-full">

    <!-- header -->
    <div id="mobile-header" class="w-full h-16 flex justify-between items-center">
      <NuxtLink to="/" class="text-menu-text font-fira_retina flex h-full items-center mx-5">
        alex-rueda
      </NuxtLink>
      <Icon @click="toggleMobileMenu()" name="icon-park-outline:hamburger-button" class="w-7 h-7 mx-5 my-auto text-hello-gray" />
    </div>

    <!-- mobile menu -->
      <div id="menu" class="bg-mobile-menu-blue z-30 w-full hidden">
        <NuxtLink id="nav-link-mobile" to="/" class="text-menu-text font-fira_retina px-6 py-4 flex items-center active">
          _hello
        </NuxtLink>
  
        <NuxtLink id="nav-link-mobile" to="/about-me" class="text-menu-text font-fira_retina px-6 py-4 flex items-center">
          _about-me
        </NuxtLink>
  
        <NuxtLink id="nav-link-mobile" to="/" class="text-menu-text font-fira_retina px-6 py-4 flex items-center">
          _projects
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
      const hello = document.getElementById('hello');

      hello.classList.toggle('hidden');
      menu.classList.toggle('hidden')

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
}

</style>
<template>
    <header id="navbar" class="fixed w-full top-0 z-30 flex flex-col shadow-md">
      <nav class="max-w-7xl mx-auto navigation justify-between w-full">

        <NuxtLink to="/" class="self-center">
          <img src="logo.svg" class="w-6 h-6 md:w-12 md:h-12" alt="">
        </NuxtLink>
        
        <ul class="hidden lg:flex space-x-5 items-center">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul> 

        <!-- <Switch class="hidden lg:flex"/> -->
        <!-- Burger icon -->
        <NuxtLink @click="toggleMobileMenu()" class="flex lg:hidden">
          <!-- <Icon name="mingcute:menu-line" class="text-gray-200 w-6 h-6 m-2" /> -->
          <img src="images/menu.svg" alt="" class="w-6 h-6 opacity-80">
        </NuxtLink>
      
      </nav>

      <MobileMenu class="mobile-menu hidden" />

    </header>
    <div id="filter" class="h-screen w-full fixed top-0 bg-black/20 z-20 hidden"></div>

</template>

<script>

  export default {

    methods: {
      toggleMobileMenu(){
        // Toggle mobile menu
        document.querySelector('.mobile-menu').classList.toggle('hidden')
        document.querySelector('.navigation').classList.toggle('shadow-md')
        document.querySelector('#filter').classList.toggle('hidden')

      }
    },
    mounted(){

      // Close mobile menu when clicking outside
      document.addEventListener('click', (e) => {
        if(!e.target.closest('.mobile-menu') && !e.target.closest('.navigation') && e.target.closest('#filter')){
          document.querySelector('.mobile-menu').classList.add('hidden')
          document.querySelector('#filter').classList.add('hidden')
        }
      })

    }
  }

</script>
  
<style>
.navigation {
    @apply flex;
    @apply p-5;
    @apply space-x-5;
/*  @apply bg-neon-blue-l; */
    background: rgba(5,19,30,0.7);
    backdrop-filter: blur(10px);

  }

#navbar {
  transition: top 0.4s;
}

/* #filter {
  transition: all 0.4s;
} */
</style>
<template>
    <header class="fixed w-full top-0 z-20 ">
      <nav class="max-w-7xl mx-auto navigation justify-between">

        <NuxtLink to="/">
          <img src="logo.png" class="w-10 h-10" alt="">
        </NuxtLink>
        
        <ul class="hidden lg:flex space-x-5 items-center">
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/blog">Blog</NuxtLink></li>
        </ul>



        <Switch class="hidden lg:flex"/>
        <!-- Burger icon -->
        <NuxtLink @click="toggleMobileMenu()" class="flex lg:hidden">
          <Icon name="mingcute:menu-line" class="text-gray-200 w-6 h-6 m-2" />
        </NuxtLink>

      </nav>

      <MobileMenu class="hidden mobile-menu fadeIn" />

    </header>
  </template>

<script>

  export default {

    methods: {
      toggleMobileMenu(){
        // Toggle mobile menu
        document.querySelector('.mobile-menu').classList.toggle('hidden')
      }
    }
  }

</script>
  
<style>
.navigation {
    @apply flex;
    @apply py-5;
    @apply space-x-5;
    @apply bg-black
   /*  @apply backdrop-blur-md */
  }
</style>
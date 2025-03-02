<template>
  <div id="mobile-menu" class="w-full z-10 lg:hidden">

    <!-- header -->
    <div id="mobile-header" class="w-full h-16 flex justify-between items-center">
      <NuxtLink class="text-menu-text font-fira_retina flex h-full items-center mx-5" to="/" @click="goHome()">
        {{ config.logoName }}
      </NuxtLink>
      <img src="/icons/burger.svg" alt="Open menu" v-if="!menuOpen" @click="toggleMobileMenu()"
        class="w-5 h-5 mx-5 my-auto" />
      <img src="/icons/burger-close.svg" alt="Closed menu" v-else @click="toggleMobileMenu()"
        name="icon-park-outline:close" class="w-5 h-5 mx-5 my-auto" />
    </div>

    <!-- mobile menu -->
    <div id="menu" class="bg-mobile-menu-blue z-10 hidden">
      <NuxtLink id="nav-link-mobile" to="/" :class="{ active: isActive('/') }" @click="toggleMobileMenu()">
        _hello
      </NuxtLink>

      <NuxtLink id="nav-link-mobile" to="/about-me" :class="{ active: isActive('/about-me') }"
        @click="toggleMobileMenu()">
        _about-me
      </NuxtLink>

      <NuxtLink id="nav-link-mobile" to="/projects" :class="{ active: isActive('/projects') }"
        @click="toggleMobileMenu()">
        _projects
      </NuxtLink>

      <NuxtLink id="nav-link-mobile" to="/contact-me" :class="{ active: isActive('/contact-me') }"
        @click="toggleMobileMenu()">
        _contact-me
      </NuxtLink>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';

import DevConfig from '~/developer.json';

const config = ref(DevConfig);

const menuOpen = ref(false);

function toggleMobileMenu(){
  menuOpen.value = !menuOpen.value;

  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');

  const page = document.getElementsByTagName('main')[0];
  // Hide / show section
  if (page.style.display === 'none') {
    page.style.display = 'flex';
  } else {
    page.style.display = 'none';
  }
};

function goHome(){
  const menu = document.getElementById('menu');
  if (!menu.classList.contains('hidden')) {
    menu.classList.toggle('hidden');
    document.getElementsByTagName('main')[0].style.display = 'flex';
    menuOpen.value = !menuOpen.value;
  }
};

const isActive = (route) => {
  return route === route.path;
};

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
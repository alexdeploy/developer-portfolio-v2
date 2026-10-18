<script setup lang="ts">
const config = developerConfig
const route = useRoute()
const menuOpen = ref(false)

function setPageVisible(visible: boolean) {
  const page = document.querySelector<HTMLElement>('main')
  if (page) page.style.display = visible ? 'flex' : 'none'
}

function toggleMobileMenu() {
  menuOpen.value = !menuOpen.value
  setPageVisible(!menuOpen.value)
}

function goHome() {
  if (menuOpen.value) toggleMobileMenu()
}

const isActive = (path: string) => route.path === path
</script>

<template>
  <nav id="mobile-menu" aria-label="Mobile" class="w-full z-10 lg:hidden">

    <!-- header -->
    <div id="mobile-header" class="w-full h-16 flex justify-between items-center">
      <NuxtLink class="text-menu-text font-fira_retina flex h-full items-center mx-5" to="/" @click="goHome()">
        {{ config.logo_name }}
      </NuxtLink>
      <button type="button" class="mx-5 my-auto flex" :aria-expanded="menuOpen" aria-controls="menu"
        :aria-label="menuOpen ? 'Close menu' : 'Open menu'" @click="toggleMobileMenu()">
        <img :src="menuOpen ? '/icons/burger-close.svg' : '/icons/burger.svg'" alt="" class="w-5 h-5" />
      </button>
    </div>

    <!-- mobile menu -->
    <div id="menu" class="bg-mobile-menu-blue z-10" :class="{ hidden: !menuOpen }">
      <NuxtLink class="nav-link-mobile" to="/" :class="{ active: isActive('/') }" @click="toggleMobileMenu()">
        _hello
      </NuxtLink>

      <NuxtLink class="nav-link-mobile" to="/about-me" :class="{ active: isActive('/about-me') }"
        @click="toggleMobileMenu()">
        _about-me
      </NuxtLink>

      <NuxtLink class="nav-link-mobile" to="/projects" :class="{ active: isActive('/projects') }"
        @click="toggleMobileMenu()">
        _projects
      </NuxtLink>

      <NuxtLink class="nav-link-mobile" to="/contact-me" :class="{ active: isActive('/contact-me') }"
        @click="toggleMobileMenu()">
        _contact-me
      </NuxtLink>
    </div>

  </nav>
</template>
<style>
@reference "../assets/tailwind.css";

#mobile-header {
  border-bottom: 1px solid #1E2D3D;
}

.nav-link-mobile {
  border-bottom: 1px solid #1E2D3D;
  @apply text-menu-text font-fira_retina px-6 py-4 flex items-center;
}

.nav-link-mobile.active {
  color: white
}
</style>

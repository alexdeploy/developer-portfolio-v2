<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

function skipToContent() {
  const main = document.querySelector<HTMLElement>('main')
  if (!main) return
  main.tabIndex = -1
  main.focus()
  main.scrollIntoView()
}

onMounted(() => {
  AOS.init({
    offset: 120,
    duration: 400,
    easing: 'ease',
    once: false,
  })
})
</script>

<template>
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:font-fira_retina focus:text-sm focus:text-black"
    @click.prevent="skipToContent"
  >Skip to content</a>
  <MobileMenu/>
  <AppHeader/>
  <span id="main-content" class="sr-only" aria-hidden="true"></span>
  <NuxtPage data-aos="fade-in"/>
  <AppFooter/>
</template>

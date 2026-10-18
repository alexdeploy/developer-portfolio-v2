<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'

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
  <MobileMenu/>
  <AppHeader/>
  <NuxtPage data-aos="fade-in"/>
  <AppFooter/>
</template>

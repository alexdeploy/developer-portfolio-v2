<script setup lang="ts">
import AOS from 'aos'
import 'aos/dist/aos.css'
import { absoluteUrl, siteMeta } from '#shared/utils/site-meta'

const route = useRoute()
const site = siteMeta(developerConfig)
const pageUrl = computed(() => (site.url ? absoluteUrl(route.path, site.url) : undefined))

useHead({
  // Pages set a short title ("Projects"); the home page keeps the full site title.
  titleTemplate: title => (title ? `${title} | ${developerConfig.name}` : site.title),
  link: computed(() => (pageUrl.value ? [{ rel: 'canonical', href: pageUrl.value }] : [])),
})

useSeoMeta({
  description: site.description,
  ogType: 'website',
  ogSiteName: developerConfig.name,
  ogTitle: site.title,
  ogDescription: site.description,
  ogImage: site.image,
  ogUrl: pageUrl,
  twitterCard: 'summary_large_image',
})

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
  <MobileMenu />
  <AppHeader />
  <span
    id="main-content"
    class="sr-only"
    aria-hidden="true"
  />
  <NuxtPage data-aos="fade-in" />
  <AppFooter />
</template>

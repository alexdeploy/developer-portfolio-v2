import tailwindcss from '@tailwindcss/vite'
import config from './developer.json'

const siteTitle = `${config.name} | ${config.role}`

/*
 * Nuxt Config File
 * Usage: https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({

  /**
   * * Nuxt Modules
   * Official modules: https://nuxt.com/modules
   */
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },

  /**
   * * App Config
   * app config: https://nuxt.com/docs/api/configuration/nuxt-config#app
   * head config: https://nuxt.com/docs/api/configuration/nuxt-config#head
   * meta config: https://nuxt.com/docs/getting-started/seo-meta
   * TODO: Add more meta tags for SEO
   * TODO: Add tags for social media sharing
   * TODO: Migrate apple-touch-icon config to manifest.json
   */
  app: {
    head: {
      htmlAttrs: {
        lang: 'en', // App language
      },
      title: siteTitle, // App window nav title
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A awesome developer portfolio design.' },
        { property: 'og:title', content: siteTitle },
        { property: 'og:description', content: 'A awesome developer portfolio design.' },
        { property: 'og:image', content: '/demo-share.jpg' },
        { property: 'og:url', content: 'https://developer-portfolio-v1.netlify.app/' },
        { name: 'theme-color', content: '#010C15' },
      ],
      link: [
        { rel: 'manifest', href: '/pwa/manifest.json' },
        { rel: 'apple-touch-icon', href: '/pwa/icons/apple-touch-icon.png' },
      ],
    },
  },

  /**
   * * Tailwind CSS 4
   * Configured in CSS (`@theme` in app/assets/tailwind.css) and compiled by the Vite plugin.
   * Docs: https://tailwindcss.com/docs/installation/framework-guides/nuxt
   */
  css: ['~/assets/tailwind.css'],
  compatibilityDate: '2026-10-18',
  vite: {
    plugins: [tailwindcss()],
  },

  /**
   * * ESLint (official Nuxt module)
   * Generates .nuxt/eslint.config.mjs, extended by eslint.config.mjs at the root.
   * `stylistic` enables formatting rules, so ESLint is also the formatter of this project.
   */
  eslint: {
    config: {
      stylistic: true,
    },
  },
})

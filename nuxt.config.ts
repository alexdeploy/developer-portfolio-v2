import tailwindcss from '@tailwindcss/vite'
import config from './developer.json'
import { siteMeta, THEME_COLOR } from './shared/utils/site-meta'

const site = siteMeta(config)

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
   * * App head
   * Language and theme colour come from developer.json (optional `site` block, see developer.schema.json).
   * SEO and social sharing tags are set per route in app/app.vue, and the web app manifest is generated
   * from the same data by server/routes/pwa/manifest.json.ts.
   * head config: https://nuxt.com/docs/api/configuration/nuxt-config#head
   */
  app: {
    head: {
      htmlAttrs: {
        lang: site.lang,
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: THEME_COLOR },
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

  /** The manifest is a server route; `nuxt generate` must prerender it like the pages. */
  nitro: {
    prerender: {
      routes: ['/pwa/manifest.json'],
    },
  },
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

const config = require("./developer.json");
const siteTitle = `${config.name} | ${config.role}`;

/*
 * Nuxt 3 Config File
 Usage: https://nuxt.com/docs/api/configuration/nuxt-config
 */
export default defineNuxtConfig({
  compatibilityDate: "2025-02-28",
  devtools: { enabled: true },
  /**
   * * App Config
   * app config: https://nuxt.com/docs/api/configuration/nuxt-config#app
   * head config: https://nuxt.com/docs/api/configuration/nuxt-config#head
   * meta config: https://nuxt.com/docs/getting-started/seo-meta
   * pageTransition config: https://nuxt.com/docs/getting-started/transitions#transitions
   * TODO: Add more meta tags for SEO
   * TODO: Add tags for social media sharing
   * TODO: Migrate apple-touch-icon config to manifest.json
   */
  app: {
    head: {
      htmlAttrs: {
        lang: "en", // App language
      },
      title: siteTitle, // App window nav title
      titleTemplate: "%s | Sherzod Axadov",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "A awesome developer portfolio design.",
        },
        { hid: "author", name: "author", content: config.name },
        {
          hid: "keywords",
          name: "keywords",
          content: "Sherzod Axadov, frontend developer, Vue, Nuxt",
        },
        // Open Graph
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:title", property: "og:title", content: siteTitle },
        {
          hid: "og:description",
          property: "og:description",
          content: "A awesome developer portfolio design.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://axadev.com/images/demo-share.png",
        },
        { hid: "og:url", property: "og:url", content: "https://axadev.com" },
        // Twitter Card
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        { hid: "twitter:title", name: "twitter:title", content: siteTitle },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: "A awesome developer portfolio design.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://axadev.com/images/demo-share.png",
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "@sherzodaxadov",
        },
        { name: "theme-color", content: "#010C15" },
      ],
      link: [
        { rel: "manifest", href: "pwa/manifest.json" },
        { rel: "apple-touch-icon", href: "pwa/icons/apple-touch-icon.png" },
      ],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: config.name,
            url: "https://axadev.com",
            sameAs: [
              "https://github.com/axadev", // update as needed
              "https://twitter.com/sherzodaxadov",
            ],
          }),
        },
      ],
    },
  },

  /**
   * * Nuxt 3 Modules
   * Official modules: https://nuxt.com/modules
   */
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sitemap", "@nuxtjs/robots"],

  components: {
    dirs: ["~/components"],
  },

  /**
   * * Tailwind CSS Config
   * Options: https://tailwindcss.nuxt.dev/getting-started/options/
   * Docs: https://tailwindcss.nuxt.dev
   */
  tailwindcss: {
    cssPath: "~/assets/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: true, // true to resolve the tailwind config in runtime. https://tailwindcss.nuxt.dev/getting-started/options/#exposeconfig
    injectPosition: 0,
    viewer: false,
  },

  // SEO modules config
  sitemap: {
    siteUrl: "https://axadev.com",
  },
  robots: {
    rules: [{ userAgent: "*", allow: "/" }],
  },

  /**
   * * Runtime Config (Environment Variables)
   * Usage: https://nuxt.com/docs/guide/going-further/runtime-config
   */
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api",
    },
  },
});

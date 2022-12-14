# `content/` [Directory](https://nuxt.com/docs/guide/directory-structure/content)

The Nuxt Content module reads the `content/` directory in your project and parses .md, .yml, .csv and .json files to create a file-based CMS for your application.

1. Render your content with built-in components.
2. Query your content with a MongoDB-like API.
3. Use your Vue components in Markdown files with the MDC syntax.
4. Automatically generate your navigation.

## Installation

Install the `@nuxt/content` module in your project:

````
yarn add --dev @nuxt/content
````

Then, add `@nuxt/content` to the `modules` section of `nuxt.config.ts`.

````ts
export default defineNuxtConfig({
  modules: [
    '@nuxt/content'
  ],
  content: {
    // https://content.nuxtjs.org/api/configuration
  }
})

````

## Create Content

Place your markdown files inside the `content/` directory in the root directory of your project:
``content/index.md`

````
# Hello Content
````

The module automatically loads and parses them.

## Documentation

Head over to https://content.nuxtjs.org to learn more about the Content module features, such as how to build queries and use Vue components in your Markdown files with the MDC syntax.
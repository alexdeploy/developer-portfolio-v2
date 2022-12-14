# `pages/` [Directory](https://nuxt.com/docs/getting-started/views#pages)

Pages represent views use for each specific route pattern. Every file in the `pages/` directory represents a different route displaying its content.

To use pages, create pages/index.vue file and add `<NuxtPage />` component to the *app.vue* (or remove *app.vue* for default entry). You can now create more pages and their corresponding routes by adding new files in the `pages/` directory.

*pages/index.vue*
````html
<template>
  <div>
    <h1>Welcome to the homepage</h1>
    <AppAlert>
      This is an auto-imported component
    </AppAlert>
  </div>
</template>
````

*pages/about.vue*
````html
<template>
  <section>
    <p>This page will be displayed at the /about route.</p>
  </section>
</template>

````
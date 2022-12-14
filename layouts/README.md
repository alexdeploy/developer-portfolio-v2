# `layouts/` [Directory](https://nuxt.com/docs/getting-started/views#layouts)

Layouts are wrappers around pages that contain a common User Interface for several pages, such as a header and footer display. Layouts are Vue files using `<slot />` components to display the page content. The `layouts/default.vue` file will be used by default. Custom layouts can be set as part of your page metadata.

>> If you only have a single layout in your application, we recommend using app.vue with the `<NuxtPage />` component instead.

*layouts/default.vue*
````html
<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
````

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

If you want to create more layouts and learn how to use them in your pages, find more information in the [Layouts section](https://nuxt.com/docs/guide/directory-structure/layouts).
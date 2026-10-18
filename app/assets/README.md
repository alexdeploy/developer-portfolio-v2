# `assets/` Directory

Nuxt uses **Vite** or **webpack** to build and bundle your application. The main function of these build tools is to process JavaScript files, but they can be extended through plugins (for Vite) or loaders (for webpack) to process other kind of assets, like stylesheets, fonts or SVG. This step transforms the original file mainly for performance or caching purposes (such as stylesheets minification or browser cache invalidation).

By convention, Nuxt uses the `assets/` directory to store these files but there is no auto-scan functionality for this directory, and you can use any other name for it.

In your application's code, you can reference a file located in the `assets/` directory by using the `~/assets/ path`.

## Example

For example, referencing an image file that will be processed if a build tool is configured to handle this file extension:

*app.vue*
````html
<template>
  <img src="~/assets/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
````

>> Nuxt won't serve files in the `assets/` directory at a static URL like `/assets/my-file.png`. If you need a static URL, use the `public/` directory.
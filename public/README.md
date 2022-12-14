# `public/` Directory

The `public/` directory is used as a public server for static assets publicly available at a defined URL of your application.

You can get a file in the `public/` directory from your application's code or from a browser by the root URL `/`.

## Example

For example, referencing an image file in the public/img/ directory, available at the static URL `/img/nuxt.png`:

````html
<template>
  <img src="/img/nuxt.png" alt="Discover Nuxt 3" />
</template>
````
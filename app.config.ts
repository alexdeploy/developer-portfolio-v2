/*
* Nuxt 3 Config File
* https://nuxt.com/docs/getting-started/configuration#app-configuration
*/
export default defineAppConfig({
    title: 'Hello Nuxt',
    blog:{
      enabled: true,
    },
    theme: {
      dark: true,
      colors: {
        primary: '#ff0000'
      }
    }
  })
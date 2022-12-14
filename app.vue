<template>
  <div>
    <SplashScreen :src="'/favicon.ico'" width="100px" :isLoading="isLoading" />
    <NuxtLoadingIndicator />
    <AppHeader v-if="!isLoading" />
    <NuxtPage v-if="!isLoading" />
    <AppFooter v-if="!isLoading" />
  </div>
</template>

<script>
export default {

  data(){
    return {
      isLoading: true,
    }
  },

  mounted(){

    this.registerServiceWorker();

    setTimeout(() => {
      this.isLoading = false;
    }, 4000);
  },

  methods: {

    /**
     * * Register the service worker
     * * Load the service worker file and set the scope.
     * ? The scope is the path where the service worker will be active.
     * ? The scope is relative to the domain.
     * ! The scope is not the same as the path to the service worker file.
     * TODO: Investigate if there is any usefull function to load in this function.
     * TODO: Export this function to a separate file ?
     */
    async registerServiceWorker() {

      // Define file and scope from root directory
      const scope = ".";
      const workerPath = "worker.js";

      // Check if service worker is supported and register it
      if ("serviceWorker" in navigator) {
        try {

          /**
           * * Register the service worker
           * .register() @returns a promise with a ServiceWorkerRegistration object
           */  

          const registration = await navigator.serviceWorker.register(workerPath, {
            scope: scope,
          }).then((registration) => {
            console.log("Service worker registration successful with scope: ", registration.scope);
            return registration;
          });

          if (registration.installing) {
            console.log("Service worker installing");
          } else if (registration.waiting) {
            console.log("Service worker installed");
          } else if (registration.active) {
            console.log("Service worker active");
          }
        } catch (error) {
          console.error(`Registration failed with ${error}`);
        }
      }
    },

  }
}
</script>

<style>

</style>
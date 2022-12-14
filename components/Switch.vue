<template>
    <div class="flex items-center">
      <div
        class="dark:bg-gray-700 bg-gray-200 switcher relative inline-flex h-[24px] w-[56px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span class="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          :class="enabled ? 'translate-x-8' : 'translate-x-0'"
          class="pointer-events-none inline-block h-[20px] w-[21px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
        />
    </div>
    </div>
  </template>

<script>
export default {

  data(){
      return {
        enabled: false,
      }
  },

  mounted() {

    // Get the system theme preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

    // Set the theme based on the system preference
    prefersDark ? this.$colorMode.preference = 'dark' : this.$colorMode.preference = 'light';

    // Switch theme button
    const switcher = document.querySelector('.switcher')

    // Add event listener function
    switcher.addEventListener('click', () => { 
      
      if(this.$colorMode.preference == 'dark') {
        this.$colorMode.preference = 'light';
        this.enabled = true;
      } else {
        this.$colorMode.preference = 'dark';
        this.enabled = false;
      }

    })
   }, 
  }
</script>
  
<template>
        <!-- dekstop menu (left) -->
        <nav class="w-full h-full hidden md:flex flex-col text-sm">
          
          <div id="logo-place" class="flex h-12">
            <NuxtLink to="/" class="text-menu-text font-fira_retina pl-6 h-full flex items-center">
              alex-rueda
            </NuxtLink>
          </div>
  
          <div id="submenu" class="h-full">

            <!-- show div if current route -->

            <div v-if="route == '/about-me'" id="sub-about" class="w-full h-full">
              <p>about subsection</p>
            </div>

            <div v-if="route == '/projects'" id="sub-about" class="w-full h-full">
              <p>projects subsection</p>
            </div>

          </div>
  
        </nav>
</template>

<script>

export default {
    name: 'MainMenu',
    data() {
        return {
          route: this.$route.path,
        }
    },
    watch: {
      $route (to, from) {
        this.route = this.$route.path
      }
    }
}
</script>

<style>
#sub-about {
  border-right: 1px solid #1E2D3D;
}
</style>
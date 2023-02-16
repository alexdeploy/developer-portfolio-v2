<template>
  <MobileMenu/>
  <AppHeader/>
  <NuxtPage/>
  <AppFooter/>
</template>

<script>
export default {
  /**
   * * Watch for route changes
   * This event is triggered when the route changes.
   * @param {Object} to - Route object
   * @param {Object} from - Route object
   */
  watch: {
    $route(to, from) {
      console.log('De', from.fullPath, 'a', to.fullPath);
    }
  }
}
</script>
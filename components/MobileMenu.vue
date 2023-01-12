<template>
  <div class="w-full h-64 bg-slate-500 px-5 dark:text-gray-100 font-sf text-lg tracking-wider">
    
    <div id="links" class="flex flex-col">
      <NuxtLink id="menu-link" class="py-3" to="/about">About</NuxtLink>
      <NuxtLink id="menu-link" class="py-3" to="/projects">Projects</NuxtLink>
      <NuxtLink id="menu-link" class="py-3" to="/blog">My notes</NuxtLink>
    </div>

    <Switch class="flex py-3 justify-end" />

  </div>
</template>

<script>
export default {
  mounted(){
    
  }
}
</script>

<style>
.mobile-menu {
  background: rgba(5,19,30,0.7);
  backdrop-filter: blur(10px);
  transition: top 0.4s;
}

#menu-link {
  border-bottom: 1px solid;
  @apply border-white/10;
}

</style>
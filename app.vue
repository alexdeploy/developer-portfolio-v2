<template>
  <div class="box flex flex-col justify-between">
  
    <div id="body-content" class="flex flex-col md:grid md:grid-cols-6">

      <MainMenu />

      <MobileMenu class="md:hidden" />

      <div class="w-full h-full md:col-span-5 flex flex-col justify-between">
        <!-- page navigation --> <AppHeader/>
        <!-- page --> <NuxtPage/>
        <!-- footer -->
      </div>
      
    </div>

    <AppFooter/>

  </div>
</template>

<style>

.box {
  @apply bg-blue-background;
  border-radius: 7px;
  border: 1px solid #1E2D3D;
  height: stretch;
  width: stretch;
}

#logo-place {
  border-bottom: 1px solid #1E2D3D;
  border-right: 1px solid #1E2D3D;
}

#main-menu {
 /*  border-right: 1px solid #1E2D3D; */
/*  display: flex;
 flex-direction: column; */
}

#body-content {
  height: stretch;
  width: stretch;
}

#social {
  border-right: 1px solid #1E2D3D;
  @apply justify-end
}
</style>

<script>
export default {
/*   watch:{
    $route (to, from){

      if (to.path == '/about-me') {
        // get about subsection and show it
        document.getElementById('sub-about').classList.toggle('hidden');
      } else {
        document.getElementById('sub-about').classList.toggle('hidden');
      }
        this.show = false;
        console.log('route changed ' + JSON.stringify(from));
    }
}  */
}
</script>
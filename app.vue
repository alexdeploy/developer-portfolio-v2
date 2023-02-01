<template>
  <div class="box flex flex-col justify-between">
  
    <div id="body-content" class="flex flex-col lg:grid lg:grid-cols-6">



      <MobileMenu class="lg:hidden" />

      <div class="w-full h-full md:col-span-6 flex flex-col justify-between">
        <!-- page navigation --> <AppHeader/>
        <!-- page --> <NuxtPage/>
        <!-- footer -->
      </div>
      
    </div>

    <AppFooter/>

  </div>
</template>

<style>

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

}
</script>
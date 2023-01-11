<template>
  <div class="flex max-w-7xl mx-auto">

    <!-- <SocialLinks /> -->
    
    <section class="flex flex-col h-screen w-full justify-center items-center">

      <div class="flex justify-center flex-shrink-0">
        <img src="images/avatar.gif" alt="" class="w-64 m-10">
        <div class="w-4 h-4 rounded-sm bg-gray-100/50 fixed left-14"></div>

      </div>

      <div class="w-full text-center">
        <span class="text-xl md:text-3xl">
          Hi 👋 I'm 
        </span>
        <h1 class="text-3xl md:text-4xl font-sfbold">
          {{ $t('developer') }}
        </h1>
        <!--  -->
        <h2 class="text-xl md:text-2xl tracking-wide dark:text-gray-500">
          {{ $t('job') }}
        </h2>

        <div class="flex justify-center">
          <libraryButtonNuxt value="Continue" to='/about' class="m-2"/>
        </div>

      </div>

    </section>
  </div>
</template>

<style>

</style>


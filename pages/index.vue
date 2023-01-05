<template>
  <div class="flex max-w-7xl mx-auto">

    <SocialLinks />

    <section class="flex h-screen w-full items-center">

      <div class="flex justify-center flex-shrink-0">
        <img src="images/avatar.gif" alt="" class="w-52 m-10">
      </div>

      <div class="w-full justify-start">
        <span class="flex text-xl md:text-3xl">
          Hi 👋 I'm 
        </span>
        <h1 class="flex text-3xl md:text-4xl font-sfbold">
          {{ $t('developer') }}
        </h1>
        <!--  -->
        <h2 class="flextext-xl md:text-2xl tracking-wide dark:text-gray-500">
          {{ $t('job') }}
        </h2>

        <div class="flex">
          <libraryButtonNuxt value="Continue" to='/about' class="m-2"/>
        </div>

      </div>

    </section>
  </div>
</template>

<style>

</style>


<template>
      <section id="hero" class="flex flex-col w-full items-center p-5 h-screen justify-center">

<!--       <div class="flex justify-center flex-shrink-0 pt-10">
        <img src="images/avatar.gif" alt="" class="w-64 m-10">
      </div> -->

      <div class="w-full">
        <span class="text-2xl md:text-3xl text-gray-300">
          Hi 👋 
        </span>
        <h1 class="text-4xl md:text-4xl font-sfbold py-2">
          I'm {{ $t('developer') }}
        </h1>
        <!--  -->
        <h2 class="text-2xl md:text-2xl font-sfbold dark:text-gray-100/50 tracking-wider">
          {{ $t('slogan') }}
        </h2>

        <div class="flex">
          <libraryButtonNuxt value="Contact me" to='/about'/>
        </div>

      </div>

      

    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
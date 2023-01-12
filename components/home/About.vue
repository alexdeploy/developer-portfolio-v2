<template>
      <!-- about me header -->
      <div id="about-header" class="section-header">
      <img src="images/avatar.gif" alt="" class="w-12">
      <p class="self-end font-sfbold">About me</p>
    </div>

    <section id="about" class="p-5">
      <div class="pb-10">
        <h1 class="text-2xl md:text-4xl font-sfbold">
            Some things About me.
        </h1>
        <div class="flex">
          <p class="tracking-wider dark:text-glitch-blue">
            Featured Projects
          </p>
          <div>
            
          </div>
        </div>
      </div>

      <p>
        {{ $t('about.description') }}
      </p>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>
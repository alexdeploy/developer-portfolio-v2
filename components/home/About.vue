<template>
  <section id="about" class="z-10">

    <!-- header -->
        <div id="about-header" class="section-header">
    
          <img src="icons/avatar-black.png" alt="" class="w-7">
    
          <h3 class="font-sfbold self-center">
            {{ $t('about.title') }}
          </h3>
    
        </div>


    <!-- content -->
    <div id="content" class="p-5">

      <h2 class="text-2xl md:text-4xl font-sfbold">
        {{ $t('about.longTitle') }}
      </h2>

      <span class="tracking-wider dark:text-glitch-blue">
        {{ $t('about.subtitle') }}
      </span>

      <!-- <div class="w-40 h-32 bg-gray-300 rounded-xl shadow-md shadow-neon-blue-l my-5">

      </div> -->

      <p v-html="$t('about.description')" class="pt-10"></p>

    </div>

  </section>
</template>

<script>

export default {
  name: 'About',

  mounted(){

    

  }
}

</script>

<style>
#about {
  @apply min-h-screen max-w-2xl;
}

#content b {
  @apply text-glitch-blue;
}

#content br {
  @apply my-5
}

</style>
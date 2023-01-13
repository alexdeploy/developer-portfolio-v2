<template>
  <section id="about">

    <!-- header -->
    <div id="about-header" class="section-header">

      <img src="images/avatar.gif" alt="" class="w-12">

      <h3 class="font-sfbold self-end">
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

      <p v-html="$t('about.description')" class="pt-10"></p>

    </div>

  </section>
</template>

<script>

export default {
  name: 'About',
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
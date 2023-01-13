<template>
  <section id="hero">
    
    <span class="hero-span">
      Hi 👋 
    </span>

    <h1 class="hero-name">
      I'm {{ $t('developer') }}
    </h1>

    <h2 class="hero-slogan">
      {{ $t('slogan') }}
    </h2>

    <VueButtonNuxt :value="$t('buttons.contact')" to='/'/>

  </section>
</template>

<script>

export default {
  name: 'Hero',
}

</script>

<style>
#hero {
  @apply flex flex-col w-full h-screen p-5 justify-center;
}

.hero-span {
 @apply text-2xl md:text-3xl lg:text-4xl text-gray-300;
}

.hero-name {
  @apply text-4xl md:text-5xl lg:text-6xl font-sfbold py-2;
}

.hero-slogan {
  @apply text-2xl md:text-3xl lg:text-5xl font-sfbold dark:text-gray-500 tracking-wider;
}
</style>
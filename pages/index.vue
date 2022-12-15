<template>
  <div class="flex">

    <section class="flex max-w-7xl mx-auto p-5 justify-center h-screen items-center">

      <div>
        <span class="flex text-xl md:text-3xl justify-center">
          Hi 👋 I'm
        </span>
        <GlitchText />
        <h2 class="flex justify-center text-xl md:text-2xl tracking-wide dark:text-gray-500">
          {{ $t('job') }}
        </h2>

        <div class="flex justify-center">
          <libraryButtonNuxt value="Continue" to='/about' class="m-2"/>
        </div>

        <div id="social" class="flex items-center justify-center dark:text-gray-400 text-gray-700">
                <NuxtLink to="https://github.com/alexruedadev">
                    <Icon name="iconoir:github" class="w-6 h-6 m-2" />
                </NuxtLink>
                <NuxtLink to="https://twitter.com/alexdeploy">
                    <Icon name="iconoir:twitter" class="w-6 h-6 m-2" />
                </NuxtLink>
                <NuxtLink>
                    <Icon name="iconoir:discord" class="w-6 h-6 m-2" />
                </NuxtLink>
                <NuxtLink>
                    <Icon name="iconoir:tiktok" class="w-6 h-6 m-2" />
                </NuxtLink>
                <NuxtLink>
                    <Icon name="iconoir:linkedin" class="w-6 h-6 m-2" />
                </NuxtLink>
            </div>
      </div>

    </section>
  </div>
</template>

<style>

</style>


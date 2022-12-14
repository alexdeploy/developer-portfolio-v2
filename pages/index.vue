<template>
  <div class="flex">

    <section class="flex max-w-7xl mx-auto p-5 justify-center h-screen items-center">

      <div>
        <span class="flex text-xl md:text-3xl justify-center">
          Hi 👋 I'm
        </span>
        <h1 class="flex text-5xl md:text-7xl font-sfbold justify-center m-3">
          {{ $t('developer') }}
        </h1>
        <h2 class="flex justify-center text-xl md:text-2xl tracking-wide">
          {{ $t('job') }}
        </h2>

        <div class="flex justify-center">
          <libraryButtonNuxt value="Continue" to='/about' class="m-2"/>
        </div>

        <div id="social" class="flex items-center justify-center dark:text-gray-200 text-gray-700">
                <NuxtLink>
                    <Icon name="uil:github-alt" class="w-5 h-5 m-2" />
                </NuxtLink>
                <NuxtLink>
                    <Icon name="uil:twitter" class="w-6 h-6 m-2" />
                </NuxtLink>
                <NuxtLink>
                    <Icon name="mingcute:discord-fill" class="w-6 h-6 m-2" />
                </NuxtLink>
                <NuxtLink>
                    <Icon name="mingcute:tiktok-fill" class="w-6 h-6 m-2" />
                </NuxtLink>
                <NuxtLink>
                    <Icon name="mingcute:linkedin-fill" class="w-6 h-6 m-2" />
                </NuxtLink>
            </div>
      </div>

    </section>
  </div>
</template>

<style>
h1 {
  font-family: Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 6vmax;
  background-color: #5390d9;
  background-image: linear-gradient(45deg, #00dc82,#16a79e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}
</style>


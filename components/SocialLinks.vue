<template>
  <div class="social h-screen justify-between flex-shrink-0">

    <ul id="down-line" class="flex-auto h-auto pb-10">
        <div class="h-full border-r-2"></div>
        <div class="h-full"></div>
    </ul>

    <div id="links" class="justify-center h-auto">
        <NuxtLink to="https://github.com/alexruedadev">
            <Icon name="iconoir:github" class="w-6 h-6 m-2 text-gray-300" />
        </NuxtLink>
        <NuxtLink to="https://twitter.com/alexdeploy">
            <Icon name="iconoir:twitter" class="w-6 h-6 m-2 text-gray-300" />
        </NuxtLink>
        <NuxtLink>
            <Icon name="iconoir:discord" class="w-6 h-6 m-2 text-gray-300" />
        </NuxtLink>
        <NuxtLink>
            <Icon name="iconoir:tiktok" class="w-6 h-6 m-2 text-gray-300" />
        </NuxtLink>
        <NuxtLink>
            <Icon name="iconoir:linkedin" class="w-6 h-6 m-2 text-gray-300" />
        </NuxtLink>
    </div>

    <ul id="down-line" class="flex-auto h-auto pt-10">
        <div class="h-full border-r-2"></div>
        <div class="h-full"></div>
    </ul>

  </div>
</template>

<script>
export default {

}
</script>

<style>

.social {
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;

    width: 40px;
/*     position: fixed;
    bottom: 100px;
    left: 406px;
    right: auto; */
    z-index: 10;
}



</style>
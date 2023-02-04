<template>
    <footer class="flex justify-between border-top text-menu-text font-fira_retina text-sm">

        <!-- social icons -->
        <div id="social-icons" class="flex">
            <span class="h-full flex justify-center items-center border-right px-5">
                find me in:
            </span>
            <NuxtLink :to="social.twitter.url + social.twitter.user" target="_blank" class="flex justify-center items-center">
                <Icon name="ri:twitter-fill" class="w-6 h-6 m-auto"/>
            </NuxtLink>
            <NuxtLink :to="social.facebook.url + social.facebook.user" target="_blank" class="flex justify-center items-center">
                <Icon name="ri:facebook-fill" class="w-6 h-6 m-auto"/>
            </NuxtLink>
        </div>

        <!-- github user -->
        <NuxtLink :to="social.github.url + social.github.user" target="_blank" class="hidden md:flex items-center px-5 border-left">
            @{{ social.github.user }}
            <Icon name="ri:github-fill" class="w-6 h-6 ml-2" />
        </NuxtLink>

    </footer>
</template>

<style>

footer {
    height: 50px;
    min-height: 50px;
}

footer a:hover {
    background-color: #1e2d3d74;
}

#social-icons > a {
    border-right: 1px solid #1E2D3D;
    height: 100%;
    width: 55px;
 }

#social-icons > a > svg {
    opacity: 0.4;
}

#social-icons > a:hover svg {
    opacity: 1;
}

</style>

<script>
export default {
    name: 'AppFooter',
    setup() {
        return {
            social: useRuntimeConfig().dev.contact.find_me_also_in.sources
        }
  },
}
</script>

<template>
    <footer class='flex md:justify-between border-top text-menu-text font-fira_retina'>

        <!-- social icons -->
        <div class="w-full flex justify-between md:justify-start">
            <span id="social-title" class="h-full flex justify-center items-center border-right px-5">
                find me in:
            </span>
            <div id="social-icons" class="flex">
                <NuxtLink :to="social.twitter.url + social.twitter.user" target="_blank" class="flex justify-center items-center">
                    <img src="/icons/social/twitter.svg" alt="twitter"/>
                </NuxtLink>
                <NuxtLink :to="social.facebook.url + social.facebook.user" target="_blank" class="flex justify-center items-center">
                    <img src="/icons/social/facebook.svg" alt="facebook"/>
                </NuxtLink>
                <NuxtLink :to="social.github.url + social.github.user" target="_blank" class="flex md:hidden justify-center items-center">
                <img src="/icons/social/github.svg" alt="github"/>
            </NuxtLink>
            </div>
        </div>

        <!-- github user -->
        <NuxtLink :to="social.github.url + social.github.user" target="_blank" class="hidden md:flex items-center px-5 border-left">
            @{{ social.github.user }}
            <img src="/icons/social/github.svg" alt="github"/>
        </NuxtLink>

    </footer>
</template>

<script setup>
import config from '~/developer.json';

const social = ref(config.contacts.social);
</script>

<script>
export default {
    name: 'AppFooter',
}
</script>

<style>

footer {
    height: 40px;
    min-height: 40px;
    font-size: 13px;
}

footer a:hover {
    background-color: #1e2d3d74;
}

#social-icons > a {
    border-right: 1px solid #1E2D3D;
    height: 100%;
    width: 50px;
 }

#social-icons > a > img {
    width: 1.25rem; /* 20px */
    height: 1.25rem; /* 20px */
    margin: auto;
    opacity: 0.4;
}

footer > a > img {
    width: 1.25rem; /* 20px */
    height: 1.25rem; /* 20px */
    margin-left: 0.5rem; /* 8px */
  }

#social-icons > a:hover img {
    opacity: 1;
}

@media (max-width: 768px) {

    #social-title {
        border-right: none;
    }

    #social-icons > a {
        border-right: none;
        border-left: 1px solid #1E2D3D;
    }

    #social-icons > a > img {
        width: 1.5rem; /* 20px */
        height: 1.5rem; /* 20px */
  }
}

</style>
<template>
    <footer class='flex md:justify-between border-top text-menu-text font-fira_retina text-sm'>

        <!-- social icons -->
        <div class="w-full flex justify-between md:justify-start">
            <span id="social-title" class="h-full flex justify-center items-center border-right px-5">
                find me in:
            </span>
            <div id="social-icons" class="flex">
                <NuxtLink :to="social.twitter.url + social.twitter.user" target="_blank" class="flex justify-center items-center">
                    <Icon name="ri:twitter-fill" class="w-6 h-6 m-auto"/>
                </NuxtLink>
                <NuxtLink :to="social.facebook.url + social.facebook.user" target="_blank" class="flex justify-center items-center">
                    <Icon name="ri:facebook-fill" class="w-6 h-6 m-auto"/>
                </NuxtLink>
                <NuxtLink :to="social.github.url + social.github.user" target="_blank" class="flex md:hidden justify-center items-center">
                <Icon name="ri:github-fill" class="w-6 h-6 m-auto" />
            </NuxtLink>
            </div>
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

@media (max-width: 768px) {

    #social-title {
        border-right: none;
    }

    #social-icons > a {
        border-right: none;
        border-left: 1px solid #1E2D3D;
    }
}

</style>

<script>
export default {
    name: 'AppFooter',
    data() {
        return {
          route: this.$route.path,
          device: '',
        }
    },
    setup() {
        return {
            social: useRuntimeConfig().dev.contact.find_me_also_in.sources
        }
  },
  computed: {

  },
  mounted() {
/*     // get device width
    const screenWidth = window.innerWidth;

    // set device
    if (screenWidth < 768) {
      this.device = 'mobile'
    } else {
      this.device = 'desktop'
    }

    console.log(this.device) */
  }
}
</script>

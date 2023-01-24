<template>
    <div>
        <div id="card" class="w-full rounded-b-lg flex flex-col max-w-xl">
    
            <div class="flex justify-between">

                <!-- icon and title -->
                <div class="flex">

                <!-- icon -->
                <div class="-mt-3 shadow-sm shadow-black rounded-lg h-fit">
                    <img :src="icon" alt="" class="w-20 h-20 rounded-lg">
                </div>
        
                <!-- title -->
                <div class="flex flex-col text-left p-4">
                    <h1 class="text-xl font-sfbold">{{ title }}</h1>
                    <span class="text-left text-gray-100/50">{{ subtitle }}</span>
                </div>
        </div>
        <!-- pixel corner -->
<!--         <div class="grid grid-cols-2 self-start">
            <div class="w-4 h-4 rounded-sm bg-neon-blue-m"></div>
            <div class="w-4 h-4 rounded-sm "></div>
            <div class="w-4 h-4 rounded-sm "></div>
            <div class="w-4 h-4 rounded-sm bg-neon-blue-m"></div>
        </div> -->
    
    

    </div>

    <!-- project description -->
    <div class="p-5">
        <p class="text-prose">{{ description }}</p>
    </div>
  </div>

  <!-- github info -->
  <div class="w-full max-w-xl flex rounded-sm mt-2 justify-between">

    <div class="space-x-2">
        <!-- star -->
        <github-button :href=repo data-size="large" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-star" data-show-count="true" aria-label="Star alexruedadev/nuxt-pwa-template on GitHub">
            Star
        </github-button>
            
        <!-- fork -->
        <github-button :href="repo + '/fork'" data-size="large" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-repo-forked" data-show-count="true" aria-label="Fork alexruedadev/nuxt-pwa-template on GitHub">
            Fork
        </github-button>
    </div>

    <!-- download -->
    <github-button :href="repo + '/archive/HEAD.zip'" data-size="large" data-color-scheme="no-preference: dark; light: light; dark: dark;" data-icon="octicon-download" aria-label="Download alexruedadev/nuxt-pwa-template on GitHub">
        
    </github-button>
  
</div>
</div>

</template>

<script>

import GithubButton from 'vue-github-button'

export default {
    name: 'ProjectCard',
    props: {
        icon: {
            type: String,
            default: '',
            required: true
        },
        title: {
            type: String,
            default: '',
            required: true
        },
        subtitle: {
            type: String,
            default: '',
            required: false
        },
        description: {
            type: String,
            default: '',
            required: true
        },
        repo: {
            type: String,
            default: '',
            required: false
        }
    },
    components: {
        GithubButton
    },
    // ...
}
</script>

<style>
#card {
    background: rgba(5,19,30,0.7);
    backdrop-filter: blur(10px);
}
</style>
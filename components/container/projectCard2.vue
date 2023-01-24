<template>
    <div>
        <div id="card" class="w-full rounded-xl flex flex-col max-w-xl shadow-[0_15px_30px_-25px_rgba(0,0,0,0.3)]">
    
            <!-- project header -->
            <div class="flex justify-between shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] px-5 py-3">

                <div class="flex items-center justify-start w-full">

                    <!-- icon -->
                    <div class="flex rounded-lg h-fit">
                        <img :src="icon" alt="" class="w-12 h-12 rounded-lg self-center">
                    </div>
        
                    <!-- title and description -->
                    <div class="flex flex-col text-left p-3">
                        <h1 class="text-md font-sfbold">{{ title }}</h1>
                        <span class="text-left text-xs text-gray-100/50">{{ subtitle }}</span>
                    </div>
                        <Icon name="iconoir:nav-arrow-right" class="w-5 h-5 m-3 text-gray-300 ml-auto" />

                </div>
            
            </div>

            <!-- techs -->
            <div class="flex text-xs px-5 py-3 space-x-2">
                <h4 class="border-neon-blue-xs border-2 bg-neon-blue-xs/10 px-2 py-0.5 rounded-md font-sfbold dark:text-gray-300">Tailwind</h4>
                <h4 class="border-green-500 border-2 bg-glitch-green/10 px-2 py-0.5 rounded-md font-sfbold dark:text-gray-300">Nuxt.js</h4>
            </div>

            <!-- project description -->
            <div class="px-5">
                <p class="text-prose">{{ description }}</p>
            </div>

            <!-- Link icons -->
            <div class="flex justify-end">
                <NuxtLink to="https://github.com/alexruedadev">
                    <Icon name="iconoir:github" class="w-5 h-5 m-3 text-gray-300" />
                </NuxtLink>
            </div>
  </div>


</div>

</template>

<script>

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
<!-- 
    * This component is used to show a splash screen while the app is loading for first time.
    * It is used in the 'app.vue' file
    TODO: Add some transition effects, for example, fade in and out.
    TODO: Make animate logo while loading and adjust time.
 -->

<template>
    <div id="full-screen" v-if="loading == true">
      <img class="center-component fadeIn" :src="src" :width="width"/>
    </div>
</template>

<script>
export default {
    name: 'SplashScreen',
    props: {
        src: {
            type: String,
            default: 'favicon.ico'
        },
        time: {
            type: Number,
            default: 2000
        },
        width: {
            type: String,
            default: '80px'
        },
    },
    data(){
        return {
            loading: true,
        }
    }, 
    mounted(){
        setTimeout(() => {
            this.loading = false
        }, this.time)
    }
}
</script>

<style>
/* 
 * Positioning
*/
#full-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    z-index: 9999;
}

.center-component {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

/* 
 * Effects
*/
.fadeIn{
    animation: fadeInEffect 2s ease;
}

@keyframes fadeInEffect{
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
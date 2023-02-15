<template>
  <section id="hello" class="flex h-full lg:pl-32 xl:pl-0">

    <!-- gradients -->
    <div class="css-blurry-gradient-blue z-10 w-48 h-96"></div>
    <div class="css-blurry-gradient-green z-10 w-48 h-96"></div>
    
    <nav id="page-menu" class='hidden xl:flex'></nav>

    <div class="grid grid-cols-12 z-20 m-7 lg:m-0 flex-1">

      <!-- hello -->
      <div id="info" class="col-span-12 lg:col-span-5 flex flex-col md:justify-center">
  
        <div class="pb-10 md:py-0">
          <p class="font-fira_retina text-hello-name">Hi all, I am</p>
          <h1 class="font-fira_regular text-5xl 2xl:text-6xl text-hello-name pt-4 pb-2">{{ config.dev.name }}</h1>
          <p class="font-fira_regular text-xl lg:text-2xl 2xl:text-3xl text-purple-text">> {{ config.dev.role }}</p>
        </div>

        <div id="sub-info" class="py-10 md:pt-20">
          <p class="font-fira_retina text-hello-gray hidden md:flex py-2">// complete the game to continue</p>
          <p class="font-fira_retina text-hello-gray">// you can also see it on my Github page</p>

          <p class="font-fira_medium py-3">
            <span class="text-codeline-tag">
              const 
            </span>
            <span class="text-codeline-name">
              githubLink
            </span>
            <span class="text-white">
               = 
              </span>
            <span class="text-codeline-link underline underline-offset-4">
              <a href="https://github.com/alexruedadev">"“https://github.com/example/url"</a>
            </span>
          </p>
        </div>
  
      </div>
  
      <!-- game -->
      <div id="game" class="hidden lg:flex flex-col justify-center col-start-7 xl:col-start-6">
        <SnakeGame />
        <!-- <img src="/images/game.png" alt="" class=""> -->
      </div>
    </div>


  </section>
</template>

<style>

.css-blurry-gradient-blue {
  position: fixed;
  bottom: 25%;
  right: 5%;
  width: 300px;
  height: 300px;
	border-radius: 0% 0% 50% 50%;
  rotate: 10deg;
	filter: blur(70px);
  background: radial-gradient(circle at 50% 50%,rgba(77, 91, 206, 1), rgba(76, 0, 255, 0));
  opacity: 0.5;
}

.css-blurry-gradient-green {
  position: absolute;
  top: 20%;
  right: 30%;
  width: 300px;
  height: 300px;
	border-radius: 0% 50% 0% 50%;
	filter: blur(70px);
  background: radial-gradient(circle at 50% 50%,rgba(67, 217, 173, 1), rgba(76, 0, 255, 0));
  opacity: 0.5;
}

#sub-info {
      font-size: 0.875rem;
    }

/* LG */

@media (min-width: 1024px) {

  .css-blurry-gradient-blue {
    position: fixed;
    bottom: 10%;
    right: 10%;
    width: 500px;
    height: 500px;
    opacity: 0.7;
    border-radius: 100% 50% 100% 0%;
  }

  .css-blurry-gradient-green {
    position: fixed;
    top: 10%;
    right: 35%;
    filter: blur(100px);
    rotate: 10deg;
    width: 400px;
    height: 400px;
    opacity: 0.5;
    border-radius: 100% 0% 0% 0%;
    rotate: 20deg;
  }
}

</style>

<script>
export default {
  name: 'Hello',
  setup() {
    const config = useRuntimeConfig()
    return {
      config
    }
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>


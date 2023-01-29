<template>
  <div id="hello" class="grid h-full">

    <!-- gradients -->
    <div class="css-blurry-gradient z-10 w-48 h-96 translate-x-40 translate-y-96"></div>
    <div class="css-blurry-gradient2 z-10 w-48 h-96 -translate-x-10 translate-y-3"></div>

    <div class="grid grid-cols-12 z-20 m-7 md:m-0">

      <!-- hello -->
      <div id="info" class="col-span-12 md:col-span-5 flex flex-col justify-around md:justify-center">
  
        <div class="py-10 md:py-0">
          <p class="font-fira_retina text-hello-name">Hi all, I am</p>
          <h1 class="font-fira_regular text-6xl text-hello-name pt-4 pb-2">Álex Rueda</h1>
          <p class="font-fira_regular text-xl md:text-3xl text-purple-text">> Full-Stack Developer</p>
        </div>

        <div class="py-10 md:pt-20">
          <p class="font-fira_retina text-hello-gray hidden md:flex">// Complete the game to continue</p>
          <p class="font-fira_retina text-hello-gray text-sm md:text-md">// find my profile on Github:</p>

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
            <span class="text-codeline-link underline underline-offset-4 text-sm md:text-md">
              <a href="https://github.com/alexruedadev">"https://github.com/alexruedadev"</a>
            </span>
          </p>
        </div>
  
      </div>
  
      <!-- game -->
      <div id="game" class="col-span-4 hidden md:flex flex-col justify-center col-start-7">
        
        <img src="images/game.png" alt="" class="xl:w-10/12">
      </div>
    </div>


  </div>
</template>

<style>

.css-blurry-gradient {
  position: fixed;
  /* transform: translate(275%, 80%); */
/*   width: 400px;
  height: 400px; */
	border-radius: 20% 50% 50% 50%;  
	filter: blur(100px);
  background: radial-gradient(circle at 50% 50%,rgb(0, 136, 255), rgba(76, 0, 255, 0));
  opacity: 0.4;
}

.css-blurry-gradient2 {
  position: fixed;
  /* transform: translate(175%, 10%); */
/*   width: 400px;
  height: 400px; */
	border-radius: 0% 50% 0% 50%;  
	filter: blur(100px);
  background: radial-gradient(circle at 50% 50%,rgb(0, 255, 119), rgba(76, 0, 255, 0));
  opacity: 0.4;
}

</style>


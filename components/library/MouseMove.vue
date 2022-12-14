<template>
  <div class="w-full h-full gradient z-0">

  </div>

  <div class="w-full h-full gradient-b z-0">

  </div>
</template>

<script>
export default {
  mounted(){

    // Change gradient position with the same as mouse position
    document.addEventListener("mousemove", (e) => {
       document.querySelector(".gradient").style.top = e.clientY - 100 + 'px';
       document.querySelector(".gradient").style.left = e.clientX - 100 + 'px'
    });

    // Set touch position
    document.addEventListener("touchmove", (e) => {
      document.querySelector(".gradient").style.top = e.touches[0].clientY - 100 + 'px';
      document.querySelector(".gradient").style.left = e.touches[0].clientX - 100 + 'px'
    });

/*     document.addEventListener("touchmove" , (e) => {
      e.preventDefault()
      document.querySelector(".gradient").style.top = e.clientY - 100 + 'px';
      document.querySelector(".gradient").style.left = e.clientX - 100 + 'px'
      console.log(e)
    }); */

}

}
</script>

<style>
@keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* GRADIENT 1 */
  .gradient {
    --size: 250px;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(rgba(55, 235, 169, 0.85), #5b37eb);
    animation: rotate var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;

    position: absolute;
/*     left: auto;
    top: auto;
    right: auto; */
    top: 0px;
    transform: translate(-50%, 0);
    transition: all 0s ease-out;
  }

  /* GRADIENT 2 */
  .gradient-b {
    --size: 250px;
    --speed: 50s;
    --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
    width: var(--size);
    height: var(--size);
    filter: blur(calc(var(--size) / 5));
    background-image: linear-gradient(rgba(235, 55, 187, 0.85), #cdeb37);
    animation: rotate var(--speed) var(--easing) alternate infinite;
    border-radius: 30% 70% 70% 30%/30% 30% 70% 70%;

    position: absolute;
/*     left: auto;
    top: auto;
    right: auto; */
    bottom: 0px;
    right: 0px;
    transform: translate(-50%, 0);
    transition: all 0s ease-out;
  }
  
  @media (min-width: 720px) {
    .gradient {
      --size: 200px;
    }
  }
 body {
    background-color: #121212;
    /* display: flex; */
    place-content: center;
    align-items: center;
    overflow: hidden;
  }

</style>
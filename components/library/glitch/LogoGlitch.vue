<template>
<div class="center">
  <h2 class="center-text glitch is-glitching" data-text="A"> <span>A</span></h2>
</div>
</template>

<script>
export default {

}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,300,600,700,300italic,400italic,600italic,900,200);


.center-text {
  margin: auto;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 80px;
  text-transform: uppercase;
}

.glitch {
  position: relative;
  color: white;
  mix-blend-mode: lighten;
}
.glitch:before, .glitch:after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  width: 100%;
  background: black;
  clip: rect(0, 0, 0, 0);
}
.glitch:before {
  left: -1px;
  text-shadow: 4px 0 rgba(255, 0, 0, 0.7);
  
}
.glitch:after {
  left: 1px;
  text-shadow: -5px 0 rgba(0, 0, 255, 0.7);
}
.glitch:hover:before {
  text-shadow: 4px 0 rgba(255, 0, 0, 0.7);
  animation: glitch-loop-1 0.8s infinite ease-in-out alternate-reverse;
}
.glitch:hover:after {
  text-shadow: -5px 0 rgba(0, 0, 255, 0.7);
  animation: glitch-loop-2 0.8s infinite ease-in-out alternate-reverse;
}

@-webkit-keyframes glitch-loop-1 {
  0% {
    clip: rect(36px, 9999px, 9px, 0);
  }
  25% {
    clip: rect(25px, 9999px, 99px, 0);
  }
  50% {
    clip: rect(50px, 9999px, 102px, 0);
  }
  75% {
    clip: rect(30px, 9999px, 92px, 0);
  }
  100% {
    clip: rect(91px, 9999px, 98px, 0);
  }
}

@keyframes glitch-loop-1 {
  0% {
    clip: rect(36px, 9999px, 9px, 0);
  }
  25% {
    clip: rect(25px, 9999px, 99px, 0);
  }
  50% {
    clip: rect(50px, 9999px, 102px, 0);
  }
  75% {
    clip: rect(30px, 9999px, 92px, 0);
  }
  100% {
    clip: rect(91px, 9999px, 98px, 0);
  }
}
@-webkit-keyframes glitch-loop-2 {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0);
  }
  25% {
    top: -6px;
    left: 4px;
    clip: rect(79px, 9999px, 19px, 0);
  }
  50% {
    top: -3px;
    left: 2px;
    clip: rect(68px, 9999px, 11px, 0);
  }
  75% {
    top: 0px;
    left: -4px;
    clip: rect(95px, 9999px, 53px, 0);
  }
  100% {
    top: -1px;
    left: -1px;
    clip: rect(31px, 9999px, 149px, 0);
  }
}
@keyframes glitch-loop-2 {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0);
  }
  25% {
    top: -6px;
    left: 4px;
    clip: rect(79px, 9999px, 19px, 0);
  }
  50% {
    top: -3px;
    left: 2px;
    clip: rect(68px, 9999px, 11px, 0);
  }
  75% {
    top: 0px;
    left: -4px;
    clip: rect(95px, 9999px, 53px, 0);
  }
  100% {
    top: -1px;
    left: -1px;
    clip: rect(31px, 9999px, 149px, 0);
  }
}
</style>
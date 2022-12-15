<template>
<div id="app">
	<div id="wrapper">
		<!-- Make sure data-text equals the text you put inside the tags. -->
		<h1 class="glitch" data-text="A">A</h1>
	</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:100");


/* Our mixin positions a copy of our text
directly on our existing text, while
also setting content to the appropriate
text set in the data-text attribute. */
.glitch {
  position: relative;
  color: white;
  font-size: 4em;
  letter-spacing: 0.5em;
  /* Animation provies a slight random skew. Check bottom of doc
  for more information on how to random skew. */
  animation: glitch-skew 1s infinite linear alternate-reverse;
}
.glitch::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  /* Creates an initial clip for our glitch. This works in
  a typical top,right,bottom,left fashion and creates a mask
  to only show a certain part of the glitch at a time. */
 /*  clip: rect(44px, 450px, 56px, 0); */
  /* Runs our glitch-anim defined below to run in a 5s loop, infinitely,
  with an alternating animation to keep things fresh. */
  animation: glitch-anim 5s infinite linear alternate-reverse;
}
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: -2px;
  text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
  animation: glitch-anim2 1s infinite linear alternate-reverse;
}

/* Creates an animation with 20 steaps. For each step, it calculates 
a percentage for the specific step. It then generates a random clip
box to be used for the random glitch effect. Also adds a very subtle
skew to change the 'thickness' of the glitch.*/
@keyframes glitch-anim {
  0% {
    clip: rect(47px, 9999px, 97px, 0);
    /* transform: skew(0.07deg); */
  }
  5% {
    clip: rect(16px, 9999px, 34px, 0);
    /* transform: skew(0.7deg); */
  }
  10% {
    clip: rect(33px, 9999px, 46px, 0);
    /* transform: skew(0.68deg); */
  }
  15% {
    clip: rect(94px, 9999px, 74px, 0);
    /* transform: skew(0.62deg); */
  }
  20% {
    clip: rect(86px, 9999px, 85px, 0);
    /* transform: skew(0.41deg); */
  }
  25% {
    clip: rect(22px, 9999px, 41px, 0);
    /* transform: skew(0.85deg); */
  }
  30% {
    clip: rect(36px, 9999px, 7px, 0);
    /* transform: skew(0.17deg); */
  }
  35% {
    clip: rect(15px, 9999px, 66px, 0);
    /* transform: skew(0.98deg); */
  }
  40% {
    clip: rect(12px, 9999px, 28px, 0);
    /* transform: skew(0.47deg); */
  }
  45% {
    clip: rect(83px, 9999px, 18px, 0);
    /* transform: skew(0.96deg); */
  }
  50% {
    clip: rect(11px, 9999px, 60px, 0);
    /* transform: skew(0.59deg); */
  }
  55% {
    clip: rect(22px, 9999px, 98px, 0);
    /* transform: skew(0.86deg); */
  }
  60% {
    clip: rect(37px, 9999px, 31px, 0);
    /* transform: skew(0.65deg); */
  }
  65% {
    clip: rect(20px, 9999px, 36px, 0);
    /* transform: skew(0.67deg); */
  }
  70% {
    clip: rect(3px, 9999px, 75px, 0);
    /* transform: skew(0.98deg); */
  }
  75% {
    clip: rect(15px, 9999px, 79px, 0);
    transform: skew(0.58deg);
  }
  80% {
    clip: rect(27px, 9999px, 99px, 0);
    transform: skew(0.11deg);
  }
  85% {
    clip: rect(46px, 9999px, 53px, 0);
    transform: skew(0.8deg);
  }
  90% {
    clip: rect(32px, 9999px, 2px, 0);
    transform: skew(0.52deg);
  }
  95% {
    clip: rect(76px, 9999px, 27px, 0);
    transform: skew(0.37deg);
  }
  100% {
    clip: rect(20px, 9999px, 90px, 0);
    transform: skew(0.15deg);
  }
}
@keyframes glitch-anim2 {
  0% {
    clip: rect(26px, 9999px, 74px, 0);
    transform: skew(0.18deg);
  }
  5% {
    clip: rect(37px, 9999px, 84px, 0);
    transform: skew(0.33deg);
  }
  10% {
    clip: rect(36px, 9999px, 20px, 0);
    transform: skew(0.43deg);
  }
  15% {
    clip: rect(10px, 9999px, 59px, 0);
    transform: skew(0.82deg);
  }
  20% {
    clip: rect(75px, 9999px, 45px, 0);
    transform: skew(0.95deg);
  }
  25% {
    clip: rect(57px, 9999px, 48px, 0);
    transform: skew(0.27deg);
  }
  30% {
    clip: rect(87px, 9999px, 43px, 0);
    transform: skew(0.43deg);
  }
  35% {
    clip: rect(37px, 9999px, 27px, 0);
    transform: skew(0.2deg);
  }
  40% {
    clip: rect(73px, 9999px, 51px, 0);
    transform: skew(0.49deg);
  }
  45% {
    clip: rect(32px, 9999px, 51px, 0);
    transform: skew(0.88deg);
  }
  50% {
    clip: rect(5px, 9999px, 66px, 0);
    transform: skew(0.65deg);
  }
  55% {
    clip: rect(12px, 9999px, 71px, 0);
    transform: skew(0.76deg);
  }
  60% {
    clip: rect(79px, 9999px, 4px, 0);
    transform: skew(0.98deg);
  }
  65% {
    clip: rect(73px, 9999px, 41px, 0);
    transform: skew(0.99deg);
  }
  70% {
    clip: rect(31px, 9999px, 63px, 0);
    transform: skew(0.08deg);
  }
  75% {
    clip: rect(90px, 9999px, 9px, 0);
    transform: skew(0.62deg);
  }
  80% {
    clip: rect(72px, 9999px, 17px, 0);
    transform: skew(0.42deg);
  }
  85% {
    clip: rect(96px, 9999px, 78px, 0);
    transform: skew(0.72deg);
  }
  90% {
    clip: rect(30px, 9999px, 40px, 0);
    transform: skew(0.18deg);
  }
  95% {
    clip: rect(47px, 9999px, 5px, 0);
    transform: skew(0.43deg);
  }
  100% {
    clip: rect(51px, 9999px, 34px, 0);
    transform: skew(0.55deg);
  }
}
/* @keyframes glitch-skew {
  0% {
    transform: skew(-3deg);
  }
  10% {
    transform: skew(-2deg);
  }
  20% {
    transform: skew(3deg);
  }
  30% {
    transform: skew(1deg);
  }
  40% {
    transform: skew(-4deg);
  }
  50% {
    transform: skew(-3deg);
  }
  60% {
    transform: skew(2deg);
  }
  70% {
    transform: skew(2deg);
  }
  80% {
    transform: skew(3deg);
  }
  90% {
    transform: skew(5deg);
  }
  100% {
    transform: skew(-3deg);
  }
} */
</style>
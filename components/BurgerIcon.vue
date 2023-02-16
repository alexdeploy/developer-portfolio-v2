<template>
<button class="menu-toggle"></button>
</template>

<script>
export default {
    mounted(){
        const menuToggle = document.querySelector('.menu-toggle');
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
        })
    }
}
</script>

<style>
.menu-toggle {
  position: relative;
  display: block;
  width: 26px;
  height: 22px;
  background: transparent;
  border-top: 3px solid;
  border-bottom: 3px solid;
  color: #607B96;
  font-size: 0;
  transition: all 0.25s ease-in-out;
}
.menu-toggle:before, .menu-toggle:after {
  content: "";
  display: block;
  width: 100%;
  height: 3px;
  position: absolute;
  top: 50%;
  left: 50%;
  background: currentColor;
  transform: translate(-50%, -50%);
  transition: transform 0.25s ease-in-out;
}

button:hover {
  color: #607B96;
}

button.is-active {
  border-color: transparent;
}
button.is-active:before {
  transform: translate(-50%, -50%) rotate(45deg);
}
button.is-active:after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

button {
  border: none;
  cursor: pointer;
  outline: none;
}

</style>
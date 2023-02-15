<template>
  <div class="code-container flex font-fira_retina text-menu-text">
    <div class="line-numbers lg:flex flex-col w-32 hidden">

      <!-- line numbers and asteriscs -->
      <div v-for="n in lines" class="grid grid-cols-2 justify-end" :key="n">
        <span class="col-span-1 mr-3">{{ n }}</span>
        <div v-if="n == 1" class="col-span-1 flex justify-center">/**</div>
        <div class="col-span-1 flex justify-center" v-if="n > 1 && n < lines">*</div>
        <div class="col-span-1 flex justify-center pl-2" v-if="n == lines">*/</div>
      </div>
    </div>

    <!-- text -->
    <div class="text-container">
      <p v-html="text"></p>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    text: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      lines: 0
    };
  },
  mounted() {
    this.updateLines();
    window.addEventListener("resize", this.updateLines);
    window.addEventListener("click", this.updateLines);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateLines);
    window.removeEventListener("click", this.updateLines);
  },
  methods: {
    updateLines() {
      const textContainer = this.$el.querySelector(".text-container");
      const style = window.getComputedStyle(textContainer);
      const fontSize = parseInt(style.fontSize);
      const lineHeight = parseInt(style.lineHeight);
      const maxHeight = textContainer.offsetHeight;
      this.lines = Math.ceil(maxHeight / lineHeight) + 1;
    }
  }
};
</script>

<style>
.code-container {
  display: flex;
  align-items: flex-start;
}

.line-numbers {
  text-align: right;
}

.text-container {
  width: 100%;
  padding-left: 10px;
  word-wrap: break-word;
}
</style>
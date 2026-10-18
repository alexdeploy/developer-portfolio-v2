<script setup lang="ts">
const props = defineProps<{ text: string }>()

const lines = ref(0)
const textContainer = ref<HTMLElement | null>(null)

function updateLines() {
  if (!textContainer.value) return
  const lineHeight = parseInt(window.getComputedStyle(textContainer.value).lineHeight)
  lines.value = Math.ceil(textContainer.value.offsetHeight / lineHeight) + 1
}

watch(() => props.text, () => nextTick(updateLines))

onMounted(() => {
  updateLines()
  window.addEventListener('resize', updateLines)
  window.addEventListener('click', updateLines)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLines)
  window.removeEventListener('click', updateLines)
})
</script>

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
    <div ref="textContainer" class="text-container">
      <p v-html="text"></p>
    </div>
  </div>
</template>
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

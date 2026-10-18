<script setup lang="ts">
withDefaults(defineProps<{ name?: string, email?: string, message?: string }>(), {
  name: '',
  email: '',
  message: '',
})

const date = new Date().toDateString()
const lines = ref(0)
const textContainer = ref<HTMLElement | null>(null)

function updateLines() {
  if (!textContainer.value) return
  const lineHeight = parseInt(window.getComputedStyle(textContainer.value).lineHeight)
  lines.value = Math.ceil(textContainer.value.offsetHeight / lineHeight)
}

onMounted(() => {
  updateLines()
  window.addEventListener('resize', updateLines)
  window.addEventListener('input', updateLines)
  window.addEventListener('click', updateLines)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateLines)
  window.removeEventListener('input', updateLines)
  window.removeEventListener('click', updateLines)
})
</script>

<template>
  <div class="code-container flex font-fira_retina text-menu-text">
    <div
      class="line-numbers lg:flex flex-col w-16 hidden"
      aria-hidden="true"
    >
      <!-- line numbers and asteriscs -->
      <div
        v-for="n in lines"
        :key="n"
        class="grid grid-cols-2 justify-end"
      >
        <span class="col-span-1 mr-3">{{ n }}</span>
      </div>
    </div>
    <div
      ref="textContainer"
      class="font-fira_retina text-white text-container"
    >
      <p>
        <span class="tag">
          const
        </span>
        <span class="tag-name">
          button
        </span>
        =
        <span class="tag-name">
          document.querySelector
          <span class="text-menu-text">
            (
            <span class="text-codeline-link">
              '#sendBtn'
            </span>
            );
          </span>
        </span>
      </p>
      <br>
      <p class="text-menu-text">
        <span class="tag">
          const
        </span>
        <span class="tag-name">
          message
        </span>
        = {
        <br> &nbsp;&nbsp;
        <span
          id="name"
          class="tag-name"
        >
          name
        </span>
        :
        <span class="text-codeline-link">"</span>
        <span
          id="name-value"
          class="text-codeline-link"
        >
          {{ name }}
        </span>
        <span class="text-codeline-link">"</span>
        , <br> &nbsp;&nbsp;
        <span
          id="email"
          class="tag-name"
        >
          email
        </span>
        :
        <span class="text-codeline-link">"</span>
        <span
          id="email-value"
          class="text-codeline-link"
        >
          {{ email }}
        </span>
        <span class="text-codeline-link">"</span>
        , <br> &nbsp;&nbsp;
        <span
          id="message"
          class="tag-name"
        >
          message
        </span>
        :
        <span class="text-codeline-link">"</span>
        <span
          id="message-value"
          class="text-codeline-link"
        >
          {{ message }}
        </span>
        <span class="text-codeline-link">"</span>
        , <br> &nbsp;&nbsp;
        date:
        <span class="text-codeline-link">
          "{{ date }}"
        </span>
        <br>
        }
      </p>
      <br>
      <p>
        <span class="tag-name">
          button.addEventListener

          <span class="text-menu-text">
            (
            <span class="text-codeline-link">
              'click'
            </span>
            ), ()
            <span class="tag">
              =>
            </span>
            {
            <br>
          </span>
          &nbsp;&nbsp;form.send
          <span class="text-menu-text">(</span>
          message
          <span class="text-menu-text">); <br> })</span>
        </span>
      </p>
    </div>
  </div>
</template>

<style>
.tag {
    color: #C98BDF;
}

.tag-name {
    color: #819bff;
}

.arrow {
    color: #F8F8F8;
}

.code-container {
    display: flex;
    align-items: flex-start;
}

.line-numbers {
    text-align: right;
}

.text-container {
    width: 100%;
    padding-left: 0px;
    word-wrap: break-word;
}
</style>

<script setup lang="ts">
import type { Gist } from '~/types/github'

const props = defineProps<{ id: string }>()

const gist = ref<Gist | null>(null)
const comment = ref<string | null>(null)
const commentOpen = ref(false)

const firstFile = computed(() => Object.values(gist.value?.files ?? {})[0])
const content = computed(() => firstFile.value?.content ?? '')

const highlighted = computed(() => highlightCode(content.value, firstFile.value?.language))

const monthsAgo = computed(() => {
  if (!gist.value) return 0
  const diff = Date.now() - new Date(gist.value.created_at).getTime()
  return Math.floor(diff / (1000 * 3600 * 24) / 30)
})

onMounted(async () => {
  try {
    const data = await getGistById(props.id)
    gist.value = data
    const comments = await getGistComments(data.comments_url)
    comment.value = comments[0]?.body ?? null
  }
  catch (error) {
    console.error(`Could not load gist ${props.id}`, error)
  }
})
</script>

<template>
  <div
    v-if="gist"
    class="gist mb-5"
  >
    <!-- head info -->
    <div class="flex justify-between my-2">
      <div class="flex">
        <!-- avatar -->
        <img
          :src="gist.owner.avatar_url"
          alt=""
          class="w-8 h-8 rounded-full mr-2"
        >

        <!-- username & gist date info -->
        <div class="flex flex-col">
          <a
            id="username"
            :href="'https://github.com/' + gist.owner.login"
            target="_blank"
            rel="noopener noreferrer"
            class="font-fira_bold text-purple-text text-xs pb-1 hover:cursor-pointer"
          >
            @{{ gist.owner.login }}
          </a>
          <p class="font-fira_retina text-xs text-menu-text">
            Created {{ monthsAgo }} months ago
          </p>
        </div>
      </div>

      <!-- details and stars -->
      <div class="flex text-menu-text font-fira_retina text-xs justify-self-end lg:mx-2">
        <button
          type="button"
          class="flex lg:mx-2 hover:text-white"
          :aria-expanded="commentOpen"
          @click="commentOpen = !commentOpen"
        >
          <img
            src="/icons/gist/comments.svg"
            alt=""
            class="w-4 h-4 mr-2"
          >
          <span>details</span>
        </button>
        <div class="hidden lg:flex">
          <img
            src="/icons/gist/star.svg"
            alt=""
            class="w-4 h-4 mx-2"
          >
          <span class="">stars</span>
        </div>
      </div>
    </div>

    <!-- eslint-disable vue/no-v-html -- highlight.js escapes the source before adding its span markup -->

    <pre

      class="snippet-container"

      tabindex="0"

      role="region"

      :aria-label="`Code snippet: ${firstFile?.filename ?? gist.id}`"
    ><code

      :class="`hljs ${highlighted.language || ''}`"

      v-html="highlighted.value"
    /></pre>

    <!-- eslint-enable vue/no-v-html -->
    <div
      v-show="commentOpen"
      class="flex justify-between text-menu-text font-fira_retina mt-4 pt-4 border-top"
    >
      <p
        v-if="comment"
        class="comment w-5/6"
      >
        {{ comment }}
      </p>
      <p
        v-else
        class="w-5/6"
      >
        No comments.
      </p>
      <button
        type="button"
        class="flex self-start"
        aria-label="Close comment"
        @click="commentOpen = false"
      >
        <img
          src="/icons/close.svg"
          alt=""
        >
      </button>
    </div>
  </div>
</template>

<style>
.snippet-container {
    background-color: #011221;
    padding: 5px;
    border-radius: 15px;
    border: 1px solid #1E2D3D;
    font-size: 12px;
    overflow-y: scroll;
    overflow-x: scroll;
    max-height: 220px;
}

.snippet-container pre {
    margin: 0;
    overflow: hidden;
    width: 100%;
    max-height: 220px;
}

.snippet-container code {
    white-space: pre-wrap;
    max-height: 220px;
    width: max-content;
    overflow: hidden;

}

.snippet-container::-webkit-scrollbar {
    display: none;  /* Safari and Chrome */
}

pre code.hljs{
    display:block;
    /* overflow-x:auto; */
    padding:1.5em
}

code.hljs{
    padding:3px 5px
}

.comment {
    font-size: 14px;
}

#username:hover {
    color: #5e6ef2;
}

/* #comment {

} */

.hljs{color:#85a9ce;background:#011221}.hljs-doctag,.hljs-keyword,.hljs-meta .hljs-keyword,.hljs-template-tag,.hljs-template-variable,.hljs-type,.hljs-variable.language_{color:#ff7b72}.hljs-title,.hljs-title.class_,.hljs-title.class_.inherited__,.hljs-title.function_{color:#d2a8ff}.hljs-attr,.hljs-attribute,.hljs-literal,.hljs-meta,.hljs-number,.hljs-operator,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-variable{color:#79c0ff}.hljs-meta .hljs-string,.hljs-regexp,.hljs-string{color:#a5d6ff}.hljs-built_in,.hljs-symbol{color:#ffa657}.hljs-code,.hljs-comment,.hljs-formula{color:#8b949e}.hljs-name,.hljs-quote,.hljs-selector-pseudo,.hljs-selector-tag{color:#7ee787}.hljs-subst{color:#c9d1d9}.hljs-section{color:#1f6feb;font-weight:700}.hljs-bullet{color:#f2cc60}.hljs-emphasis{color:#c9d1d9;font-style:italic}.hljs-strong{color:#c9d1d9;font-weight:700}.hljs-addition{color:#aff5b4;background-color:#033a16}.hljs-deletion{color:#ffdcd7;background-color:#67060c}
</style>

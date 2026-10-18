<script setup lang="ts">
import type { AboutFolder, AboutSection } from '~/types/developer'

const config = developerConfig
const sections = config.about.sections

const currentSection = ref('personal-info')
const folder = ref('bio')

const openSections = ref<Record<string, boolean>>({})
const contactsOpen = ref(false)

const activeSection = computed(() => sections[currentSection.value])
const activeFolder = computed(() => activeSection.value?.info[folder.value])

const isActive = (name: string) => folder.value === name
const isSectionActive = (name: string) => currentSection.value === name
const isSectionOpen = (name: string) => openSections.value[name] === true

function focusCurrentSection(section: AboutSection) {
  currentSection.value = section.title
  folder.value = Object.keys(section.info)[0] ?? folder.value
  openSections.value[section.title] = !isSectionOpen(section.title) // expand/collapse folders (mobile)
}

function focusCurrentFolder(target: AboutFolder) {
  folder.value = target.title
  if (!activeSection.value?.info[target.title]) {
    const owner = Object.keys(sections).find(name => sections[name]?.info[target.title])
    if (owner) currentSection.value = owner
  }
}

</script>

<template>
  <main id="about-me" class="page">
    <h1 class="sr-only">About me</h1>

    <div id="mobile-page-title">
      <h2>_about-me</h2>
    </div>

    <div id="page-menu" class="w-full flex">

      <!-- DESKTOP section icons -->
      <div id="sections">
        <button v-for="section in config.about.sections" :key="section.title" type="button" class="section-icon" :class="{ active: isSectionActive(section.title)}" :aria-pressed="isSectionActive(section.title)" :aria-label="section.title" @click="focusCurrentSection(section)">
          <img :id="'section-icon-' + section.title" :src="section.icon" alt="">
        </button>
      </div>

      <!-- focused section content -->
      <div class="section-content hidden lg:block w-full h-full border-right">

        <!-- title -->
        <div class="section-content-title hidden lg:flex items-center min-w-full">
          <img src="/icons/arrow.svg" alt="" class="section-arrow mx-3 open">
          <p class="font-fira_regular text-white text-sm">{{ activeSection?.title }}</p>
        </div>

        <!-- folders -->
        <div>
          <div v-for="(folder, key, index) in activeSection?.info ?? {}" :key="key" class="grid grid-cols-2 items-center my-2 font-fira_regular text-menu-text">
            <button type="button" class="flex col-span-2 w-full text-left hover:text-white" :aria-pressed="isActive(folder.title)" @click="focusCurrentFolder(folder)">
              <img class="diple" src="/icons/diple.svg" alt="" :class="{ open: isActive(folder.title)}">
              <img :src="'/icons/folder' + (index+1) + '.svg'" alt="" class="mr-3">
              <span :id="folder.title" :class="{ active: isActive(folder.title)}">{{ key }}</span>
            </button>
            <div v-if="folder.files !== undefined" class="col-span-2">
              <div v-for="(file, key) in folder.files" :key="key" class="flex my-2">
                <img src="/icons/markdown.svg" alt="" class="ml-8 mr-3"/>
                <p >{{ key }}</p>
              </div> 
            </div>
          </div>
        </div>

        <!-- contact -->
        <div id="section-content-title-contact" class="flex items-center min-w-full border-top">
          <img src="/icons/arrow.svg" alt="" class="section-arrow mx-3 open">
          <p class="font-fira_regular text-white text-sm">{{ config.contacts.direct.title }}</p>
        </div>
        <div id="contact-sources" class="hidden lg:flex lg:flex-col my-2">
          <div v-for="(source, key) in config.contacts.direct.sources" :key="key" class="flex items-center mb-2">
            <img :src="'/icons/' + key + '.svg'" alt="" class="mx-4">
            <a :href="contactHref(key, source)" class="font-fira_retina text-menu-text hover:text-white">{{ source }}</a>
          </div>
        </div>

      </div>

      <!-- mobile -->
      <div class="section-content lg:hidden w-full font-fira_regular">

        <div v-for="section in config.about.sections" :key="section.title">
          
          <!-- section title (mobile) -->
          <button type="button" class="section-content-title flex lg:hidden mb-1 w-full text-left" :aria-expanded="isSectionOpen(section.title)" :aria-controls="'folders-' + section.title" @click="focusCurrentSection(section)">
            <img src="/icons/arrow.svg" alt="" class="section-arrow" :class="{ 'rotate-90': isSectionOpen(section.title) }">
            <span class="text-white text-sm">{{ section.title }}</span>
          </button>

          <!-- folders -->
          <div :id="'folders-' + section.title" v-show="isSectionOpen(section.title)">
            <div v-for="(folder, key, index) in section.info" :key="key" class="grid grid-cols-2 items-center my-2 font-fira_regular text-menu-text">
              <button type="button" class="flex col-span-2 w-full text-left hover:text-white" :aria-pressed="isActive(folder.title)" @click="focusCurrentFolder(folder)">
                <img class="diple" src="/icons/diple.svg" alt="">
                <img :src="'/icons/folder' + (index+1) + '.svg'" alt="" class="mr-3">
                <span :class="{ active: isActive(folder.title)}">{{ key }}</span>
              </button>
              <div v-if="folder.files !== undefined" class="col-span-2">
                <div v-for="(file, key) in folder.files" :key="key" class="flex my-2">
                  <img src="/icons/markdown.svg" alt="" class="ml-8 mr-3"/>
                  <p >{{ key }}</p>
                </div>
                
              </div>
            </div>
          </div>
          
        </div>

        <!-- section content title -->
        <button type="button" class="section-content-title flex items-center min-w-full w-full text-left" :aria-expanded="contactsOpen" aria-controls="contacts" @click="contactsOpen = !contactsOpen">
          <img src="/icons/arrow.svg" alt="" class="section-arrow" :class="{ 'rotate-90': contactsOpen }">
          <span class="font-fira_regular text-white text-sm">{{ config.contacts.direct.title }}</span>
        </button>

        <!-- section content folders -->
        <div id="contacts" v-show="contactsOpen">
          <div v-for="(source, key) in config.contacts.direct.sources" :key="key" class="flex items-center my-2">
            <img :src="'/icons/' + key + '.svg'" alt="">
            <a :href="contactHref(key, source)" class="font-fira_retina text-menu-text hover:text-white ml-4">{{ source }}</a>
          </div>
        </div>

      </div>

    </div>
    <!-- MENU END -->

    <!-- content -->
    <div class="flex flex-col lg:grid lg:grid-cols-2 h-full w-full">
      
      <div id="left" class="w-full flex flex-col border-right">
        
        <!-- windows tab desktop -->
        <div class="tab-height w-full hidden lg:flex border-bot items-center">
          <div class="flex items-center border-right h-full">
            <p class="font-fira_regular text-menu-text text-sm px-3">{{ activeSection?.title }}</p>
            <img src="/icons/close.svg" alt="" class="mx-3">
          </div>
        </div>

        <!-- windows tab mobile -->
        <div id="tab-mobile" class="flex lg:hidden font-fira_retina">
            <span class="text-white">// </span>
            <h3 class="text-white px-2">{{ activeSection?.title }}</h3>
            <span class="text-menu-text"> / </span>
            <h3 class="text-menu-text pl-2">{{ activeFolder?.title }}</h3>
        </div>
        
        <!-- text -->
        <div id="commented-text" class="flex h-full w-full lg:border-right overflow-hidden">

          <div class="w-full h-full ml-5 mr-10 lg:my-5 overflow-scroll">
              <CommentedText :text="activeFolder?.description ?? ''" />
          </div>
          
          <!-- scroll bar -->
          <div class="scroll-bar h-full border-left hidden lg:flex justify-center py-1">
            <div class="scroll">
          </div>

        </div>

      </div>
      
    </div>

    <div id="right" class="max-w-full flex flex-col">
        
      <!-- windows tab -->
      <div class="tab-height w-full h-full hidden lg:flex border-bot items-center">

      </div>

      <!-- windows tab mobile -->
      <div class="tab-height w-full h-full flex-none lg:hidden items-center">

      </div>

        <div id="gists-content" class="flex">
        
          <div id="gists" class="flex flex-col lg:px-6 lg:py-4 w-full overflow-hidden">
            <!-- title -->
            <h2 class="text-white lg:text-menu-text mb-4 text-sm">// Code snippet showcase:</h2>

            <div class="flex flex-col overflow-scroll">
              <!-- snippets -->
              <GistSnippet data-aos="fade-down" v-for="(gist, key) in config.gists" :key="key" :id="gist" />
            </div>
          </div>

          <!-- scroll bar -->
          <div class="scroll-bar h-full border-left hidden lg:flex justify-center py-1">
            <div class="scroll"></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
@reference "../assets/tailwind.css";


#sections {
  width: 5rem; /* 80px */
  height: 100%;
  display: none;
  border-right: 1px solid #1E2D3D;
}

/* LG */
@media (min-width: 1024px) {
  #sections {
    display: block;
  }
}

.section-icon {
  @apply my-6 w-full hover:cursor-pointer flex justify-center;
  opacity: 0.4;
}

.section-icon.active {
  opacity: 1;
}

.section-icon:hover {
  opacity: 1;
}

.tab-height {
  min-height: 35px;
  max-height: 35px;
}

#tab-mobile {
  padding: 25px 20px 0px 25px;
  align-items: flex-end;
}

.diple {
  @apply mx-3 w-2 max-w-fit;
}

.open {
  transform: rotate(90deg);
}

.active {
  color:white;
}

#right, #left {
  height: 100%;
  overflow: hidden;
}

#gists-content {
  height: 100%;
  overflow: hidden;
}

@media (max-width: 1024px) {
  #gists-content {
    height: 100%;
    padding: 0px 25px;
    overflow: hidden;
  }

  #about {
  min-height: stretch;
}
}

.section-arrow {
  transition: 0.1s;
}

#section-content #contacts {
  padding: 0px 25px;
}

</style>

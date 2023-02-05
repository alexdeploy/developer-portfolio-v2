<template>
      <section id="about" class="lg:flex block max-h-full h-full overflow-hidden">

        <!-- mobile title -->
        <div class="lg:hidden font-fira_retina text-white p-6 border-bot h-min">
          <h2>_about-me</h2>
        </div>

        <!-- MENU -->
        <div id="page-menu" class="w-full h-auto flex">

          <!-- section icons (desktop) -->
          <div id="sections" class="hidden lg:block h-full w-20">
            <div id="section-icon" v-for="section in config.dev.about.sections" :key="section.title" :class="{ active: isSectionActive(section.title)}">
              <img :id="'section-icon-' + section.title" :src="section.icon" alt="" @click="focusCurrentSection(section)">
            </div>
          </div>

          <!-- dekstop -->
          <div id="section-content" class="hidden lg:block w-full h-full border-right">

            <!-- section title (desktop) -->
            <div id="section-content-title" class="hidden lg:flex items-center min-w-full">
              <img src="/icons/arrow-down.svg" alt="" class="mx-3">
              <p v-html="config.dev.about.sections[currentSection].title" class="font-fira_regular text-white text-sm"></p>
            </div>

            <!-- folders -->
            <div>
              <div v-for="(folder, key, index) in config.dev.about.sections[currentSection].info" :key="key" class="grid grid-cols-2 items-center my-2 font-fira_regular text-menu-text" @click="focusCurrentFolder(folder)">
                <div class="flex col-span-2 hover:text-white hover:cursor-pointer">
                    <img id="diple" src="/icons/diple.svg" alt="" :class="{ open: isOpen(folder.title)}">
                    <img :src="'/icons/folder' + (index+1) + '.svg'" alt="" class="mr-3">
                    <p :id="folder.title" v-html="key" :class="{ active: isActive(folder.title)}"></p>
                  </div>
                  <div v-if="folder.files !== undefined" class="col-span-2">
                    <div v-for="(file, key) in folder.files" :key="key" class="hover:text-white hover:cursor-pointer flex my-2">
                      <img src="/icons/markdown.svg" alt="" class="ml-8 mr-3"/>
                      <p >{{ key }}</p>
                    </div>
                    
                  </div>
              </div>
            </div>

          </div>

          <!-- mobile -->
          <div id="section-content" class="lg:hidden w-full">

            <div v-for="section in config.dev.about.sections" :key="section.title">
              
              <!-- section title (mobile) -->
              <div :key="section.title" :src="section.icon" id="section-content-title" class="flex lg:hidden items-center min-w-full mb-1" @click="focusCurrentSection(section)">
                <img src="/icons/arrow-down.svg" alt="" class="mx-3">
                <p v-html="section.title" class="font-fira_regular text-white text-sm"></p>
              </div>
    
              <!-- folders -->
              <div :id="'folders-' + section.title" :class="currentSection == section.title ? 'block' : 'hidden'">
                <div v-for="(folder, key, index) in config.dev.about.sections[section.title].info" :key="key" class="grid grid-cols-2 items-center my-2 font-fira_regular text-menu-text hover:text-white hover:cursor-pointer" @click="focusCurrentFolder(folder)">
                  <div class="flex col-span-2">
                    <img id="diple" src="/icons/diple.svg">
                    <img :src="'icons/folder' + (index+1) + '.svg'" alt="" class="mr-3">
                    <p :id="folder.title" v-html="key" :class="{ active: isActive(folder.title)}"></p>
                  </div>
                  <div v-if="folder.files !== undefined" :id="'files-' + folder.title">
                    <p v-for="(file, key) in folder.files" :key="key">{{ key }}</p>
                  </div>
                </div>
              </div>
              
            </div>

          </div>

        </div>
        <!-- MENU END -->

        <div class="flex flex-col lg:grid lg:grid-cols-2 h-full w-full overflow-hidden">
          
          <div id="left" class="h-full w-full flex flex-col border-right">
            
            <!-- windows tab desktop -->
            <div class="tab-height w-full hidden lg:flex border-bot items-center">
              <div class="flex items-center border-right h-full">
                <p v-html="config.dev.about.sections[currentSection].title" class="font-fira_regular text-menu-text text-sm px-3"></p>
                <img src="/icons/close.svg" alt="" class="m-3">
              </div>
            </div>

            <!-- windows tab mobile -->
            <div class="tab-height flex lg:hidden items-center mx-5 mt-10 mb-2">
              <div class="flex items-end h-full">
                <span class="text-white"> // </span>
                <p v-html="config.dev.about.sections[currentSection].title" class="font-fira_regular text-white text-sm px-3"></p>
                <span class="text-menu-text"> / </span>
                <p v-html="config.dev.about.sections[currentSection].info[folder].title" class="font-fira_regular text-menu-text text-sm px-3"></p>
              </div>
            </div>
            
            <!-- content -->
            <div class="h-full w-full lg:border-right flex overflow-hidden">
              <div class="w-full h-full ml-5 mr-10 my-14">
                  <TextCodeEditor :text="config.dev.about.sections[currentSection].info[folder].description" />
              </div>
              
              <!-- scroll bar -->
              <div id="scroll-bar" class="h-full border-left hidden lg:flex justify-center py-1">
                <div id="scroll">
                </div>
              </div>

            </div>
          
          </div>
  
          <div id="right" class="max-w-full flex flex-col">
            
            <!-- windows tab -->
            <div class="tab-height w-full h-full flex-none lg:border-right border-bot items-center">

            </div>

            <!-- content -->
            <div id="gists-content" class="flex overflow-y-hidden">
              
              <div id="gists" class="flex flex-col w-full overflow-scroll">
                <!-- title -->
                <h3 class="text-menu-text font-fira_retina text-sm m-5">// Code snippet showcase:</h3>
                <!-- snippets -->
                <GistSnippet v-for="(gist, key) in config.public.dev.gists" :key="key" :id="gist" />
              </div>

              <!-- scroll bar -->
              <div id="scroll-bar" class="h-full border-left hidden lg:flex justify-center py-1">
                <div id="scroll"></div>
              </div>
            </div>

          </div>
        </div>

      </section>
</template>

<style>

#section-icon {
  @apply my-6 hover:cursor-pointer flex justify-center;
  opacity: 0.4;
}

#section-icon.active {
  opacity: 1;
}

#section-icon:hover {
  opacity: 1;
}

.tab-height {
  height: 35px;
}

#scroll-bar{
  width: 20px;
}

#scroll {
  width: 14px;
  height: 7px;
  background-color: #607B96;
}

#diple {
  @apply mx-3 w-2 max-w-fit;
}

.open {
  transform: rotate(90deg);
}

.active {
  color:white;
}

#right {
  height: 100%;
  overflow: hidden;
}

#gists-content {
  height: 100%;
  overflow: hidden;
}

#gists::-webkit-scrollbar {
  display: none;
}


</style>

<script>

export default {
  data() {
    return {
      currentSection: 'personal-info',
      folder: 'bio',
    }
  },
  /**
   * In setup we can define the data we want to use in the component before the component is created.
   */
  setup() {
    const config = useRuntimeConfig()
    return {
      config
    }
  },
  computed: {
    // Set active class to current page link
    isActive() {
      return folder => this.folder === folder;
    },
    isSectionActive() {
      return section => this.currentSection === section;
    },
    isOpen() {
      return folder => this.folder === folder;
    },
  },
  methods: {
    focusCurrentSection(section) {
      this.currentSection = section.title
      this.folder = Object.keys(section.info)[0]

      // toggle hidden class
      document.getElementById('folders-' + section.title).classList.toggle('hidden')
    },
    focusCurrentFolder(folder) {
      this.folder = folder.title
      // handle if folder belongs to the current section. It happens when you click on a folder from a different section in mobile view.
      this.currentSection = this.config.dev.about.sections[this.currentSection].info[folder.title] ? this.currentSection : Object.keys(this.config.dev.about.sections).find(section => this.config.dev.about.sections[section].info[folder.title])
    },
    /**
     * TODO: Hay que crear un método para que cuando se haga click en un folder, se muestren los archivos que contiene. Y si se hace click en un archivo, se muestre el contenido del archivo.
     * TODO:  Además de girar el icono del diple.
     */
    toggleFiles() {
      document.getElementById('file-' + this.folder).classList.toggle('hidden')
    }
  }
}
</script>
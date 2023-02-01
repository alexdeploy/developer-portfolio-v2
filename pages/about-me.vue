<template>
      <section id="about" class="lg:flex block h-full">

        <!-- mobile title -->
        <div class="lg:hidden font-fira_retina text-white p-6 border-bot h-min">
                <h2>_about-me</h2>
              </div>

        <!-- MENU -->
        <div id="page-menu" class="w-full h-auto flex">

          <!-- about sections desktop (icons) -->
          <div id="sections" class="hidden lg:block h-full w-20">
            <img v-for="section in config.info.about.sections" :key="section.title" :src="section.icon" alt="" class="m-auto my-5 hover:fill-black" @click="focusCurrentSection(section)">
          </div>

          <!-- dekstop -->
          <div id="section-content" class="hidden lg:block w-full h-full border-right">

            <!-- section title (desktop) -->
            <div id="section-content-title" class="hidden lg:flex items-center min-w-full">
              <img src="icons/arrow-down.svg" alt="" class="mx-3">
              <p v-html="config.info.about.sections[currentSection].title" class="font-fira_regular text-white text-sm"></p>
            </div>

            <!-- folders -->
            <div>
              <div v-for="(folder, key, index) in config.info.about.sections[currentSection].info" :key="key" class="flex items-center my-2 font-fira_regular text-menu-text hover:text-white hover:cursor-pointer">
                <img src="icons/diple.svg" alt="" class="mx-3 w-2">
                <img :src="'icons/folder' + (index+1) + '.svg'" alt="" class="mr-3">
                <p :id="folder.title" v-html="key" :class="{ active: isActive(folder.title)}" @click="focusCurrentFolder(folder)"></p>
              </div>
            </div>

          </div>

          <!-- mobile -->
          <div id="section-content" class="lg:hidden w-full border-right">

            <div v-for="section in config.info.about.sections" :key="section.title">
              
              <!-- section title (mobile) -->
              <div :key="section.title" :src="section.icon" id="section-content-title" class="flex lg:hidden items-center min-w-full mb-1" @click="focusCurrentSection(section)">
                <img src="icons/arrow-down.svg" alt="" class="mx-3">
                <p v-html="section.title" class="font-fira_regular text-white text-sm"></p>
              </div>
    
              <!-- folders -->
              <div :id="'folders-' + section.title" :class="currentSection == section.title ? 'block' : 'hidden'">
                <div v-for="(folder, key, index) in config.info.about.sections[section.title].info" :key="key" class="flex items-center my-2 font-fira_regular text-menu-text hover:text-white hover:cursor-pointer" @click="focusCurrentFolder(folder)">
                  <img src="icons/diple.svg" alt="" class="mx-3 w-2">
                  <img :src="'icons/folder' + (index+1) + '.svg'" alt="" class="mr-3">
                  <p :id="folder.title" v-html="key" :class="{ active: isActive(folder.title)}"></p>
                </div>
              </div>
              
            </div>

          </div>

        </div>
        <!-- MENU END -->

        <div class="flex flex-col lg:grid lg:grid-cols-2 h-full w-full">
          
          <div id="left" class="h-full w-full flex flex-col">
            
            <!-- windows tab desktop -->
            <div class="tab-height w-full hidden lg:flex border-right border-bot items-center">
              <div class="flex items-center border-right h-full">
                <p v-html="config.info.about.sections[currentSection].title" class="font-fira_regular text-menu-text text-sm px-3"></p>
                <img src="icons/close.svg" alt="" class="m-3">
              </div>
            </div>

            <!-- windows tab mobile -->
            <div class="tab-height w-full flex lg:hidden items-center mx-5 mt-10 mb-2">
              <div class="flex items-end h-full">
                <span class="text-white"> // </span>
                <p v-html="config.info.about.sections[currentSection].title" class="font-fira_regular text-white text-sm px-3"></p>
                <span class="text-menu-text"> / </span>
                <p v-html="config.info.about.sections[currentSection].info[folder].title" class="font-fira_regular text-menu-text text-sm px-3"></p>
              </div>
            </div>
            
            <!-- content -->
            <div class="h-full w-full border-right flex">
              <div class="w-full h-full">
                  <TextEditor :text="config.info.about.sections[currentSection].info[folder].info" />
              </div>
              
              <!-- scroll bar -->
              <div id="scroll-bar" class="h-full border-left hidden lg:flex justify-center py-1">
                <div id="scroll">
                </div>
              </div>

            </div>
          
          </div>
  
          <div id="right" class="h-full w-full flex flex-col">
            
            <!-- windows tab -->
            <div class="tab-height w-full flex border-right border-bot items-center">


            </div>
            

            <div class="h-full w-full border-right flex">

              <!-- snippets -->
              <div class="w-full h-full">



              </div>

              <!-- scroll bar -->
              <div id="scroll-bar" class="h-full border-left hidden lg:flex justify-center py-1">
                <div id="scroll">

                </div>
              </div>
            </div>
          
          </div>
        </div>


      </section>
</template>

<style>

#page-menu {
  width: 275px
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

.active {
  color:white;
}

.section > path {
  color:aqua
}

/* .section-icon {
  fill: aqua;
  color: orange;
}
.section-icon:hover {
  color: black;
} */
</style>

<script>
export default {
  data() {
    return {
      currentSection: 'personal-info',
      folder: 'bio'
    }
  },
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
    }
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
      this.currentSection = this.config.info.about.sections[this.currentSection].info[folder.title] ? this.currentSection : Object.keys(this.config.info.about.sections).find(section => this.config.info.about.sections[section].info[folder.title])
    
    }
  }

}
</script>
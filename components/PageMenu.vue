<template>
        <!-- dekstop menu (left) -->
        <nav :class="route == '/' ? 'hello-menu hidden lg:flex' :'w-full h-fit lg:h-full text-sm'">

          <div id="submenu" class="lg:h-full flex w-full">

            <!-- show div if current route -->

            <div v-if="route == '/'" class="hello-menu hidden">

            </div>

<!--             <div v-if="route == '/about-me'" class="w-full h-full flex">
 -->
              <!-- about sections -->
<!--               <div id="sections" class="h-full w-20">
                <img v-for="section in config.info.about['sections']" :key="section.title" :src="section.icon" alt="" class="m-auto my-5" @click="focus = section.title">
              </div>


              <div id="section-content" class="w-full h-full border-right">
 -->
                <!-- section content title -->
<!--                 <div id="section-content-title" class="flex items-center min-w-full">
                  <img src="icons/arrow-down.svg" alt="" class="mx-3">
                  <p v-html="config.info.about.sections[focus].title" class="font-fira_regular text-white text-sm"></p>
                </div> -->

                <!-- section content folders -->
<!--                 <div>
                  <div v-for="(folder, key, index) in config.info.about.sections[focus].info" :key="key" class="flex items-center my-2">
                    <img src="icons/diple.svg" alt="" class="mx-3 w-2">
                    <img :src="'icons/folder' + (index+1) + '.svg'" alt="" class="mr-3">
                    <p v-html="key" class="font-fira_retina text-menu-text"></p>
                  </div>
                </div>

              </div>

            </div> -->

            <!-- projects menu -->
            <div v-if="route == '/projects'" class="w-full h-full">
              <p>projects subsection</p>
            </div>

            <!-- contact menu -->
            <div id="contact-menu" v-if="route == '/contact-me'" class="w-full h-full flex flex-col border-right">

              <!-- mobile title -->
              <div class="lg:hidden font-fira_retina text-white p-6 border-bot">
                <h2>_contact-me</h2>
              </div>

              <div class="w-full h-full">


                  <!-- section content title -->
                  <div id="section-content-title-contact" class="flex items-center min-w-full" @click="toggleDirectSources()">
                    <img id="arrow-down" src="icons/arrow-down.svg" alt="" class="mx-3">
                    <p v-html="config.info.contact.direct.title" class="font-fira_regular text-white text-sm"></p>
                  </div>
  
                  <!-- section content folders -->
                  <div id="contact-sources" class="my-5 hidden lg:flex lg:flex-col">
                    <div v-for="(source, key) in config.info.contact.direct.sources" :key="key" class="flex items-center my-2">
                      <img :src="'icons/' + key + '.svg'" alt="" class="mx-4">
                      <a v-html="source" href="/" class="font-fira_retina text-menu-text hover:text-white"></a>
                    </div>
                  </div>

                  <!-- social links -->
                  <div id="section-content-title-contact" class="flex items-center border-top" @click="toggleSocialLinks()">
                    <img id="arrow-down2" src="icons/arrow-down.svg" alt="" class="mx-3">
                    <p v-html="config.info.contact.find_me_also_in.title" class="font-fira_regular text-white text-sm"></p>
                  </div>
  
                  <!-- section content folders -->
                  <div id="social-links" class="my-5 hidden lg:flex lg:flex-col">
                    <div v-for="(source, key) in config.info.contact.find_me_also_in.sources" :key="key" class="flex items-center my-2">
                      <img :src="'icons/link.svg'" alt="" class="mx-4">
                      <a :href="source.url + source.user" class="font-fira_retina text-menu-text hover:text-white" target="_blank">{{ source.title }}</a>
                    </div>
                  </div>

              </div>
            </div>

          </div>
  
        </nav>
</template>

<script>

export default {
    name: 'PageMenu',
    data() {
        return {
          route: this.$route.path,
          focus: 'personal-info',
          activeFolder: '',
        }
    },
    setup() {
    const config = useRuntimeConfig()

    return {
      config
    }
  },
  methods: {
    /**
     * Toggle contact sources hidding
     */
    toggleDirectSources() {
      
      document.getElementById('contact-sources').classList.toggle('lg:hidden');
      document.getElementById('contact-sources').classList.toggle('hidden');
      document.getElementById('arrow-down').classList.toggle('-rotate-90')
    },
    toggleSocialLinks() {
      document.getElementById('social-links').classList.toggle('lg:hidden');
      document.getElementById('social-links').classList.toggle('hidden')
      document.getElementById('arrow-down2').classList.toggle('-rotate-90')
    }
  }
}
</script>

<style>

#sections {
  border-right: 1px solid #1E2D3D;
  width: 75px
}

#section-content-title {
  border-bottom: 1px solid #1E2D3D;
  width: 200px;
  height: 35px;
}

#section-content-title-contact {
  @apply cursor-pointer;
  border-bottom: 1px solid #1E2D3D;
  width: 275px;
  height: 35px;
}

.hello-menu {
  width: 275px;
}

@media (max-width: 1024px) {
  #page-menu {
    width: 100% !important;
  }

  #section-content-title {
  border-bottom: 0px;
  width: 100%;
  height: 35px;
  background-color: #1E2D3D;
  }

  #section-content-title-contact {
    width: 100%;
    height: 35px;
    background-color: #1E2D3D;
    margin-bottom: 3px
  }

  #left, #contact-menu {
    border-right: 0px;
  }

}
</style>
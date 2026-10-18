<script setup lang="ts">
const contact = developerConfig.contacts

const name = ref('')
const email = ref('')
const message = ref('')

function open(elementId: string) {
  const element = document.getElementById(elementId)
  const arrow = element?.querySelector<HTMLElement>('.arrow')
  const links = element?.querySelector<HTMLElement>('#links')
  if (!arrow || !links) return
  const isOpen = links.style.display === 'block'
  links.style.display = isOpen ? 'none' : 'block'
  arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)'
}

onMounted(() => {
  const isDesktop = window.innerWidth > 1024
  for (const submenu of document.querySelectorAll<HTMLElement>('.submenu')) {
    const links = submenu.querySelector<HTMLElement>('#links')
    const arrow = submenu.querySelector<HTMLElement>('.arrow')
    if (links) links.style.display = isDesktop ? 'block' : 'none'
    if (arrow && isDesktop) arrow.style.transform = 'rotate(90deg)'
  }
})
</script>

<template>
    <main id="contact-me" class="page">

        <div id="mobile-page-title">
            <h2>_contact-me</h2>
        </div>

        <div id="page-menu" class="w-full h-full flex flex-col border-right">

            <!-- contacts -->
            <div id="contacts" class="submenu">
                <div class="title" @click="open('contacts')">
                    <img class="arrow" src="/icons/arrow.svg" alt="">
                    <h3>
                        contacts
                    </h3>
                </div>
                <div id="links">
                    <div v-for="(source, key) in contact.direct.sources" :key="key" class="link">
                        <img :src="'/icons/' + key + '.svg'" alt="">
                        <a v-html="source" href="/" class="font-fira_retina text-menu-text hover:text-white"></a>
                    </div>
                </div>
            </div>

            <!-- find me also in -->
            <div id="find-me-in" class="submenu border-top">
                <div class="title" @click="open('find-me-in')">
                    <img class="arrow" src="/icons/arrow.svg" alt="">
                    <h3>
                        find-me-also-in
                    </h3>
                </div>
                <div id="links">
                    <div v-for="(source, key) in contact.find_me_also_in.sources" :key="key" class="link">
                        <img src="/icons/link.svg" alt="">
                        <a :href="source.url + source.user" class="font-fira_retina text-menu-text hover:text-white" target="_blank">{{ source.title }}</a>
                    </div>
                </div>
            </div>

        </div>
            
        <div class="flex flex-col w-full">

        <!-- windows tab -->
        <div class="tab-height w-full hidden lg:flex border-right border-bot items-center">

                <div class="flex items-center border-right h-full">
                    <p class="font-fira_regular text-menu-text text-sm px-3">contacts</p>
                    <img src="/icons/close.svg" alt="" class="m-3">
                </div>

            </div>

            <!-- main -->
            <div class="flex lg:grid lg:grid-cols-2 h-full w-full">
        
                <div id="left" class="h-full w-full flex flex-col border-right items-center">
                    
                    <ContactForm v-model:name="name" v-model:email="email" v-model:message="message" />

                </div>

                <div id="right" class="h-full w-full hidden lg:flex">
                    
                    <div class="form-content">
                        <FormContentCode :name="name" :email="email" :message="message" />
                    </div>
                    <!-- scroll bar -->
                    <div id="scroll-bar" class="h-full border-left flex justify-center py-1">
                        <div id="scroll"></div>
                    </div>
                
                </div>
            </div>

        </div>
    </main>
</template>
<style>

.arrow {
    transition: 0.1s;
    margin-right: 10px;
    width: 9px;
    height: 9px;
}

.submenu {
    display: flex;
    flex-direction: column;
}

.submenu .title h3 {
    @apply font-fira_regular;
    color: white;
    font-size: 16px;
}

.link {
    display: flex;
    align-items: center;
    padding: 4px 25px;
}

.link img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}

#links {
    padding: 10px 0px;
}

.form-content {
    padding: 75px 50px 0px 75px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    font-size: 15px;
}
@media (min-width: 1024px) {
    
    .submenu .title {
        display: flex;
        align-items: center;
        border-bottom: 1px solid #1E2D3D;
        padding: 0px 25px;
        height: 35px;
        padding: 0px 25px;
    }
    .submenu .title:hover {
        cursor: pointer;
    }
    .submenu .title h3 {
        font-size: 14px;
    }
}

</style>

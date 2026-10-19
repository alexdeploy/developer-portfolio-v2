<script setup lang="ts">
const contact = developerConfig.contacts

useHead({ title: 'Contact me' })

const name = ref('')
const email = ref('')
const message = ref('')

// Submenus start expanded (desktop) and collapse on small screens once mounted.
const openMenus = reactive<Record<string, boolean>>({ 'contacts': true, 'find-me-in': true })

function toggle(menu: string) {
  openMenus[menu] = !openMenus[menu]
}

onMounted(() => {
  const isDesktop = window.innerWidth > 1024
  openMenus.contacts = isDesktop
  openMenus['find-me-in'] = isDesktop
})
</script>

<template>
  <main
    id="contact-me"
    class="page"
  >
    <h1 class="sr-only">
      Contact me
    </h1>

    <div id="mobile-page-title">
      <h2>_contact-me</h2>
    </div>

    <div
      id="page-menu"
      class="w-full h-full flex flex-col border-right"
    >
      <!-- contacts -->
      <div
        id="contacts"
        class="submenu"
      >
        <button
          type="button"
          class="title w-full text-left"
          :aria-expanded="openMenus.contacts"
          aria-controls="contacts-links"
          @click="toggle('contacts')"
        >
          <img
            class="arrow"
            :class="{ 'rotate-90': openMenus.contacts }"
            src="/icons/arrow.svg"
            alt=""
          >
          <span class="title-text">contacts</span>
        </button>
        <div
          v-show="openMenus.contacts"
          id="contacts-links"
          class="links"
        >
          <div
            v-for="(source, key) in contact.direct.sources"
            :key="key"
            class="link"
          >
            <img
              :src="'/icons/' + key + '.svg'"
              alt=""
            >
            <a
              :href="contactHref(key, source)"
              class="font-fira_retina text-menu-text hover:text-white"
            >{{ source }}</a>
          </div>
        </div>
      </div>

      <!-- find me also in -->
      <div
        id="find-me-in"
        class="submenu border-top"
      >
        <button
          type="button"
          class="title w-full text-left"
          :aria-expanded="openMenus['find-me-in']"
          aria-controls="find-me-in-links"
          @click="toggle('find-me-in')"
        >
          <img
            class="arrow"
            :class="{ 'rotate-90': openMenus['find-me-in'] }"
            src="/icons/arrow.svg"
            alt=""
          >
          <span class="title-text">find-me-also-in</span>
        </button>
        <div
          v-show="openMenus['find-me-in']"
          id="find-me-in-links"
          class="links"
        >
          <div
            v-for="(source, key) in contact.find_me_also_in.sources"
            :key="key"
            class="link"
          >
            <img
              src="/icons/link.svg"
              alt=""
            >
            <a
              :href="source.url + source.user"
              class="font-fira_retina text-menu-text hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >{{ source.title }}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full">
      <!-- windows tab -->
      <div class="tab-height w-full hidden lg:flex border-right border-bot items-center">
        <div class="flex items-center border-right h-full">
          <p class="font-fira_regular text-menu-text text-sm px-3">
            contacts
          </p>
          <img
            src="/icons/close.svg"
            alt=""
            class="m-3"
          >
        </div>
      </div>

      <!-- main -->
      <div class="flex lg:grid lg:grid-cols-2 h-full w-full">
        <div
          id="left"
          class="h-full w-full flex flex-col border-right items-center"
        >
          <ContactForm
            v-model:name="name"
            v-model:email="email"
            v-model:message="message"
            :action="contact.form?.action"
            :fallback-email="contact.direct.sources.email"
          />
        </div>

        <div
          id="right"
          class="h-full w-full hidden lg:flex"
        >
          <div class="form-content">
            <FormContentCode
              :name="name"
              :email="email"
              :message="message"
            />
          </div>
          <!-- scroll bar -->
          <div class="scroll-bar h-full border-left flex justify-center py-1">
            <div class="scroll" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
@reference "../assets/tailwind.css";

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

.submenu .title .title-text {
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

.links {
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
    .submenu .title .title-text {
        font-size: 14px;
    }
}
</style>

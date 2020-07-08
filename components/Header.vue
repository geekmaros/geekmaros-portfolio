<template>
  <header
    class="h-16 -mt-1 z-50 md:h-20 lg:h-20 z-10 w-full fixed shadow items-center bg-regal-purple px-4 py"
  >
    <div class="cursor"></div>
    <nav
      class="flex h-full w-full relative justify-between items-center md:px-4 md:py-8"
    >
      <div class="w-full h-full flex items-center justify-between flex-wrap">
        <div class="image-container lg:-mt-2">
          <nuxt-link to="/">
            <h1 class="text-white text-xl font-bold -mt-1">GEEKMAROS</h1>
          </nuxt-link>
        </div>

        <button
          class="flex z-50 items-center focus:outline-none md:block lg:hidden"
          @click="isOpen = !isOpen"
        >
          <img class="" width="24px" height="24px" :src="hamburgerSrc" alt="" />
        </button>
      </div>

      <div
        class="nav-links flex flex-row items-center px-2 py-3 text-white hidden lg:flex"
      >
        <nuxt-link
          v-for="link in navLink"
          :key="link.id"
          :to="`${link.to}`"
          class="block font-serif rounded-full text-white text-white hover:text-regal-blue font-medium px-2 py-1 mt-0 ml-2"
        >
          <!--          <span class="font-mono">{{ 1 + i++ }}.</span>-->
          {{ link.name }}</nuxt-link
        >

        <button
          class="bg-transparent border-2 border-regal-blue text-white hover:bg-hover-purple text-gray-900 rounded block font-semibold px-4 py-2 ml-2"
        >
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1ID5V1MNldn_TIQOd06M-pn1xls748f7I/view?usp=sharing"
            class="text-white hover:text-regal-blue"
            >Resume</a
          >
        </button>
      </div>
    </nav>

    <!--    Mobile Nav bar -->
    <div
      :class="isOpen ? 'blo' : 'hid'"
      class="mobile-nav nav-links transform flex flex-col h-screen px-10 py-24 overflow-auto text-white bg-aside-purple lg:hidden top-0 absolute w-1/2"
    >
      <nuxt-link
        v-for="link in navLink"
        :key="link.id"
        to="/"
        class="block rounded-full text-white text-white font-semibold hover:text-regal-blue text-xl font-medium px-2 py-5 items-center text-center"
        >{{ link.name }}</nuxt-link
      >

      <button
        class="bg-transparent opacity-75 border-2 border-regal-blue text-white mt-3 rounded block font-semibold text-xl px-4 py-2 mt-10"
      >
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1ID5V1MNldn_TIQOd06M-pn1xls748f7I/view?usp=sharing"
          >Resume</a
        >
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      scrollPosition: null,
      navLink: [
        {
          id: '1nl',
          name: 'About',
          to: '#about',
        },
        {
          id: '2nl',
          name: 'Experience',
          to: '#experience',
        },
        {
          id: '3nl',
          name: 'Work',
          to: '#work',
        },
        {
          id: '4nl',
          name: 'Contact',
          to: '#contact',
        },
      ],
    }
  },
  computed: {
    hamburgerSrc() {
      if (this.isOpen) {
        return '/assets/svg/blue-close-icon.svg'
      }
      return '/assets/svg/blue-hamburger-open.svg'
    },
  },
  mounted() {
    window.addEventListener('scroll', this.updateScrollPosition)
  },
  methods: {
    updateScrollPosition() {
      this.scrollPosition = window.scrollY
    },
  },
}
</script>
<style scoped lang="sass">
.nav-links.blo
  right: 0
  transition: right .5s ease-in

.nav-links.hid
  right: -1000px
  transition: all .5s ease-out
</style>

<template>
  <!--  <header class="h-8 bg-regal-purple shadow md:px-8 lg:px-10">-->
  <!--    <a href="/" class="text-lg text-white">-->
  <!--      LOGO-->
  <!--    </a>-->
  <!--  </header>-->
  <header class="h-20 flex relative items-center bg-regal-purple">
    <nav
      :class="scrollPosition > 10 ? 'scrolled sm:bg-white ' : ''"
      class="sm:flex w-full relative sm:justify-between fixed sm:items-center"
    >
      <div class="flex items-center justify-between flex-wrap px-4 py-3">
        <div class="image-container">
          <h1>LOGO</h1>
        </div>

        <button
          class="flex items-center focus:outline-none sm:hidden"
          @click="isOpen = !isOpen"
        >
          <img
            class="z-50"
            width="24px"
            height="24px"
            :src="hamburgerSrc"
            alt=""
          />
        </button>
      </div>

      <div
        :class="isOpen ? 'block' : 'hidden'"
        class="nav-links flex flex-col sm:flex sm:flex-row sm:items-center hidden px-2 py-3 text-white"
      >
        <nuxt-link
          v-for="link in navLink"
          :key="link.id"
          to="/`${link.to}`"
          class="block sm:rounded-full text-white sm:text-white font-semibold hover:text-regal-blue font-medium px-2 py-1 sm:mt-0 sm:ml-2"
          >{{ link.name }}</nuxt-link
        >

        <button
          class="bg-transparent border-2 border-regal-blue sm:text-white text-gray-900 mt-3 sm:mt-0 rounded block font-semibold px-4 py-2 sm:ml-2"
        >
          <nuxt-link to="#">Resume</nuxt-link>
        </button>
      </div>
    </nav>

    <!--    Mobile Nav bar -->
    <div
      :class="isOpen ? 'blo' : 'hid'"
      class="nav-links transform flex flex-col h-screen px-10 py-24 overflow-auto  text-white bg-aside-purple top-0 absolute w-1/2 right-0 sm:hidden"
    >
      <nuxt-link
        v-for="link in navLink"
        :key="link.id"
        to="/"
        class="block sm:rounded-full text-white sm:text-white font-semibold hover:text-regal-blue text-xl font-medium px-2 py-5 items-center text-center"
        >{{ link.name }}</nuxt-link
      >

      <button
        class="bg-transparent border-2 border-regal-blue text-white mt-3 rounded block font-semibold text-xl px-4 py-2 mt-10"
      >
        <nuxt-link to="#">Resume</nuxt-link>
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
  right: -300px
  transition: all .5s ease-out
</style>

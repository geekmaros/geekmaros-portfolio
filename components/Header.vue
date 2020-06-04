<template>
  <!--  <header class="h-8 bg-regal-purple shadow md:px-8 lg:px-10">-->
  <!--    <a href="/" class="text-lg text-white">-->
  <!--      LOGO-->
  <!--    </a>-->
  <!--  </header>-->
  <header class="test h-16 flex bg-regal-purple">
    <nav
      :class="scrollPosition > 10 ? 'scrolled sm:bg-white ' : ''"
      class="sm:flex w-full sm:justify-between fixed sm:items-center shadow"
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
        class="nav-links mr-6 flex flex-col sm:flex sm:flex-row sm:items-center px-2 py-3 text-white"
      >
        <nuxt-link
          v-for="link in navLink"
          :key="link"
          to="/"
          class="block sm:rounded-full text-blue-900 sm:text-white font-semibold hover:text-regal-pink px-2 py-1 sm:mt-0 sm:ml-2"
          >{{ link.name }}</nuxt-link
        >

        <button
          class="bg-transparent border border-regal-blue sm:text-white  text-gray-900 mt-3 sm:mt-0 rounded block font-semibold px-2 py-1 sm:ml-2"
        >
          <nuxt-link to="#">Donate</nuxt-link>
        </button>
      </div>
    </nav>
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
          name: 'About',
          to: '#about',
        },
        {
          name: 'Experience',
          to: '#experience',
        },
        {
          name: 'Work',
          to: '#work',
        },
        {
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
<style scoped lang="sass"></style>

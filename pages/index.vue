<template>
  <div class="flex flex-col">
    <Header></Header>
    <Hero></Hero>
    <About></About>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import About from '~/components/About.vue'

export default {
  components: {
    Header,
    Hero,
    About,
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>

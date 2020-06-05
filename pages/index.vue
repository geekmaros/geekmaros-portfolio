<template>
  <div class="overflow-x-hidden">
    <Header></Header>
    <Hero></Hero>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'

export default {
  components: {
    Header,
    Hero,
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

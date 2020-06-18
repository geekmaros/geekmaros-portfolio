<template>
  <section
    class="work h-screen font-serif text-xl bg-regal-purple h-auto py-10 px-5 sm:py-0 sm:px-40 lg:py-32"
  >
    <header class="flex justify-start items-center relative mb-6">
      <span
        class="text-work text-2xl font-semibold sm:text-3xl opacity-75 text-white sm:font-semibold"
        >Where I've Worked</span
      >
    </header>
    <div class="work-place sm:mt-10 font-sans">
      <div class="work-tab flex sm:flex relative h-auto">
        <span class="active-tab" :style="{ top: spanPosition + 'px' }"></span>
        <div
          v-for="(place, i) in places"
          :key="`place-${i}`"
          @click="getActiveTab(i)"
          :class="{
            'active-span': activeTab === i,
          }"
          ref="myActiveSpan"
          class="place text-white hover:bg-hover-purple"
        >
          {{ place }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Work',
  data() {
    return {
      places: [
        'Demz Analytics',
        'Freyda Inc',
        'Al-Hikmah University',
        'WebRelated Consulting',
      ],
      activeTab: 0,
      spanPosition: null,
      color: 'red',
    }
  },
  methods: {
    getActiveTab(i) {
      this.activeTab = i
      const activeSpan = this.$refs.myActiveSpan[i]
      this.spanPosition = activeSpan.offsetTop
    },
  },
}
</script>

<style scoped lang="sass">
section
  .work-place
    .work-tab
      position: relative
      flex-direction: column
      margin-right: 2rem
      align-self: flex-start
      border-left: 1px solid var(--regal-blue)
      .active-tab
        position: absolute
        left: 0
        background: var(--regal-blue)
        width: 3px
        height: 2.75rem
        margin-left: -2px
        transition: all .4s
      .place
        padding: .75rem 2rem
        cursor: pointer
        font-size: .875rem
        margin-left: -2px

      .active-span.place
        color: var(--regal-blue)






@media screen and (min-width: 1024px)
  section
    header
      .text-work:after
        content: ''
        position: absolute
        height: 1px
        width: 20vw
        top: 48%
        left: 30%
        opacity: 0.3
        background: var(--regal-blue)
</style>

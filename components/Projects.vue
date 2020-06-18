<template>
  <section
    class="about text-xl bg-regal-purple h-auto py-8 px-5 sm:py-0 sm:px-40 lg:py-32"
  >
    <header class="flex justify-start items-center relative mb-6">
      <span
        class="text-project font-serif text-2xl font-semibold sm:text-3xl opacity-75 text-white sm:font-semibold"
        >Things I've Built</span
      >
    </header>
  </section>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        'HTML & CSS(SASS)',
        'JavaScript ES6+',
        'Vue (Nuxtjs)',
        'Figma',
        'Node & MongoDb',
        'UI & UX Design',
        'VENOM Stack',
      ],
    }
  },
}
</script>

<style scoped lang="sass">
.about-content
  .image-wrapper
    width: 288px
    height: 288px

    .img
      width: 17rem
      height: 17rem
      position: absolute
      object-fit: cover
      background: url('/assets/images/official2.jpeg')
      background-size: cover
      background-blend-mode: multiply
      box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px;
      z-index: 400

    .overlay
      position: absolute
      width: 17rem
      height: 17rem
      background-color: rgb(100, 255, 218)
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
      opacity: 0.5
      z-index: 1000
      filter: contrast(1)

      &:hover
        background-color: transparent
        .square
          border: 2px solid var(--regal-blue)
    .square
      position: absolute
      width: 17rem
      height: 17rem
      border: 2px solid var(--regal-blue)
      border-radius: 5px
      opacity: 0.8
      z-index: 2

@media screen and (min-width: 400px)
  section
    header
      .text-project:after
        content: ''
        position: absolute
        height: 1px
        width: 63%
        top: 48%
        right: 10px
        opacity: 0.3
        background: var(--regal-blue)


@media screen and (min-width: 1024px)
  section
    header
      .text-project:after
        content: ''
        position: absolute
        height: 1px
        width: 20vw
        top: 48%
        left: 24%
        opacity: 0.3
        background: var(--regal-blue)
</style>

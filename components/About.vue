<template>
  <section
    class="about font-serif text-xl bg-regal-purple h-auto py-8 px-5 sm:py-0 sm:px-40 lg:py-32"
  >
    <header class="flex justify-start items-center relative mb-6">
      <span
        class="text-about text-2xl font-semibold sm:text-3xl opacity-75 text-white sm:font-semibold"
        >About Me</span
      >
    </header>

    <div
      class="about-content tracking-tighter relative font-serif opacity-75 flex flex-col items-center text-white sm:grid sm:grid-cols-3 sm:items-start"
    >
      <div class="about-compo text-justify sm:col-span-2 sm:pr-48">
        <p class="tracking-tighter">
          Hola! I'm Abdulrasaq Mustapha also known as
          <a
            href="https://github.com/geekmaros"
            target="_blank"
            title="You can find me on all social media platform as @geekmaros"
            ><span class="text-regal-blue">geekmaros</span></a
          >, a frontend developer based in Nigeria( 🇳🇬 ).
        </p>
        <p class="mt-4 tracking-tighter">
          I leverage on web technologies to design and develop awesome digital
          solutions [products] for start-up companies and businesses. I am
          driven with the goal to always deliver top-notch products with focus
          on fast, elegant and accessible user experiences.
        </p>
        <p class="mt-4 tracking-tighter">
          Here is a list of technologies I have recently been working with:
        </p>
        <ul
          class="flex flex-col mt-4 sm:grid sm:grid-cols-2 sm:col-gap-0 sm:row-gap-2"
        >
          <li
            v-for="(tech, i) in technologies"
            :key="`tech-${i}`"
            class="text-base flex items-center mt-1"
          >
            <img class="h4 pr-2" src="/assets/svg/list-icon.svg" alt="" />
            {{ tech }}
          </li>
        </ul>
      </div>

      <div class="image-wrapper mt-8 sm:mt-0 sm:-ml-16">
        <div class="overlay z-10"></div>
        <div class="img w-full rounded-sm">e66470</div>
        <div class="square ml-4 mt-4 hover:mt-2"></div>
      </div>
    </div>
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
         background-color: red
         border: 2px solid var(--regal-blue)
   .square
     position: absolute
     width: 17rem
     height: 17rem
     border: 2px solid var(--regal-pink)
     border-radius: 5px
     opacity: 0.8
     z-index: 2


@media screen and (min-width: 1024px)
  section
    header
      .text-about:after
        content: ''
        position: absolute
        height: 1px
        width: 20vw
        top: 48%
        left: 15%
        opacity: 0.3
        background: var(--regal-blue)
</style>

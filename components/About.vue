<template>
  <section
    id="about"
    class="about text-xl bg-regal-purple h-auto py-24 px-5 md:py-16 md:px-10 lg:py-32 lg:px-40"
  >
    <header class="flex justify-start items-center relative mb-6">
      <span
        class="text-about font-serif text-2xl font-semibold md:text-3xl text-white md:font-semibold"
        >About Me</span
      >
    </header>

    <div
      class="about-content tracking-tighter relative font-serif opacity-75 flex flex-col items-center text-white lg:grid lg:grid-cols-3 items-start"
    >
      <div class="about-compo text-justify sm:col-span-2 md:pr-0 lg:pr-48">
        <p class="tracking-tighter">
          Hi! I'm Abdulrasaq Mustapha also known as
          <a
            href="https://github.com/geekmaros"
            target="_blank"
            title="You can find me on all social media platform as @geekmaros"
            ><span class="text-regal-blue">geekmaros</span></a
          >
        </p>
        <p class="mt-4 tracking-tight">
         A Product Engineer, Tech Content Creator. With over 5 years of experience, I specialize in creating scalable, user-centric digital solutions that drive business growth and elevate user experiences.
        </p>
        <p class="mt-4 tracking-tight">
     I’m also a tech content creator, sharing insights through articles, talks, and mentorship to empower the tech community. As a community-driven engineer, I actively contribute to fostering innovation and collaboration within the global tech space.
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
            <img class="h-4 pr-2" src="/assets/svg/list-icon.svg" alt="" />
            {{ tech }}
          </li>
        </ul>
      </div>

      <div class="image-wrapper mt-8 md:-mr-64 lg:mt-0 lg:-ml-16">
        <div class="overlay z-10"></div>
        <div class="img w-full rounded-sm"></div>
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
        'HTML & CSS(SASS/SCSS)',
        'JavaScript ES6+',
        'Vuejs (Nuxtjs)',
        'Reactjs (Nextjs)',
        'TailwindCSS',
        'Typescript',
        'Ruby on Rails',
        'AWS',
        'Git',
        'Jest/Playwright',
        'Responsive Design',
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
     background: url('/assets/images/Official One.jpg')
     background-size: cover
     background-position: center
     background-blend-mode: multiply
     box-shadow: rgba(2, 12, 27, 0.7) 0px 10px 30px -15px
     z-index: 400

   .overlay
     position: absolute
     width: 17rem
     height: 17rem
     background-color: rgb(100, 255, 218)
     transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s
     opacity: 0.3
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

@media screen and (max-width: 414px)
  section

    header
      .text-about:after
        display: none
        content: ''
        position: absolute
        height: 1px
        width: 63%
        top: 48%
        right: 10px
        opacity: 0.3
        background: var(--regal-blue)

@media screen and (max-width: 968px)
  section

    header
      .text-about:after
        content: ''
        position: absolute
        height: 1px
        width: 70%
        top: 48%
        right: 10%
        opacity: 0.3
        background: var(--regal-blue)



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

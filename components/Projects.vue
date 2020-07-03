<template>
  <section
    id="work"
    class="work font-serif text-xl bg-regal-purple h-auto py-24 px-5 sm:py-0 sm:px-40 md:py-16 md:px-10 lg:pl-64 lg:pr-40 lg:pt-24 lg:pb-24"
  >
    <header class="flex justify-start items-center relative mb-6">
      <span
        class="text-project font-serif text-2xl font-semibold sm:text-3xl opacity-75 text-white sm:font-semibold"
        >Things I've Built</span
      >
    </header>

    <div class="project-content flex flex-col md:grid md:grid-cols-3">
      <div
        class="image-wrapper relative md:col-span-2 md:row-auto w-full order-2 md:order-1"
      >
        <img class="" src="/assets/images/doclytix.png " alt="project-images" />
        <div class="overlay w-full"></div>
      </div>
      <div
        class="project-detail flex flex-col text-white md:items-end order-1 mb-4 md:order-2"
      >
        <header class="flex flex-col items-end">
          <span class="font-sans text-base text-regal-blue"
            >Featured Project</span
          >
          <span class="font-serif text-3xl font-bold opacity-75"
            >Demz Analytics</span
          >
        </header>
        <p
          class="project-summary mt-5 text-base z-10 text-right bg-aside-purple p-5 md:-ml-16 shadow-md rounded-md"
        >
          Doculytix is a financial document review software where clients can
          manage their financial documents by creating, uploading or modifying
          existing documents.
        </p>
        <p
          class="font-sans text-sm tech-used ml-5 md:ml-0 self-start md:self-center mt-2 text-regal-blue"
        >
          <span class="md:mr-10 lg:mr-2">HTML</span>
          <span>CSS</span>
        </p>
        <a href="#" class="self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            viewBox="0 0 194.818 194.818"
            class="md:h-5 md:w-5 h-5 w-5"
          >
            <title>External</title>
            <g fill="#64ffda">
              <path
                d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"
              ></path>
              <path
                d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"
              ></path>
            </g>
          </svg>
        </a>
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
.project-content
  .image-wrapper
    width: 100%
    height: 369px
    position: relative
    &::after
      width: 100%
      height: 100%
      position: absolute
      content: ""
      background-color: #64ffda
      transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s
      opacity: .4

    &:hover
      &::after
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s
        background: none




    img
      height: 100%
      position: absolute
      object-fit: cover
      background-size: contain
      background-blend-mode: multiply




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

@media screen and (max-width: 768px)
  section
    .project-content
      .image-wrapper
        width: 100%
        height: 269px




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
    .project-content
      .lg\:grid-cols-3
        grid-template-columns: repeat(3,minmax(0,1fr))
</style>

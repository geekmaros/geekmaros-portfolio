<template>
  <section
    class="bg-regal-purple lg:h-auto font-serif py-24 px-5 md:py-24 md:px-10 lg:py-32 lg:px-40"
  >
    <span
      class="text-regal-blue opacity-75 font-sans text-base font-semibold lg:text-xl"
      >Hola, my name is</span
    >
    <h1 class="text-3xl md:text-6xl lg:leading-snug text-white font-bold">
      Abdulrasaq Mustapha.
    </h1>
    <h2
      class="text-2xl md:text-5xl opacity-75 mt-0 text-white leading-snug font-semibold"
    >
      I
      <span class="text-regal-blue opacity-100 font-bold text-3xl md:text-6xl"
        >design</span
      >
      &
      <span class="text-regal-pink opacity-100 font-bold text-3xl md:text-6xl"
        >develop</span
      >
      frontend apps.
    </h2>
    <p
      class="hero-text md:leading-2 w-auto tracking-tighter text-base text-justify md:text-left md:text-xl w-11/12 md:pr-10 lg:w-7/12 md:text-justify"
    >
      I'm a Frontend Engineer with over 2 years of experience in designing and
      developing scalable websites and frontend applications. I am a
      <a
        href="https://vuejs.org/"
        title="My Favourite FE framework"
        target="_blank"
        class="underline text-regal-blue"
        >Vue.js</a
      >
      nerd and advocate. You will always find me talking about utility-first CSS
      such as
      <a
        href="https://tailwindcss.com/"
        target="_blank"
        class="underline text-regal-blue"
        >Tailwind CSS</a
      >.
    </p>
    <a href="mailto:razicruz@gmail.com" class="focus:outline-none">
      <button
        class="getintouch z-10 relative opacity-75 flex items-center mt-20 md:mt-10 py-3 px-5 text-white focus:outline-none hover:bg-hover-purple rounded border border-regal-blue bg-transparent font-hairline font-medium"
      >
        Get In Touch

        <svg
          class="ml-2"
          width="28"
          height="22"
          viewBox="0 0 128 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 33H123M123 33L79.5 2.5M123 33L79.5 61"
            stroke="#fff"
            stroke-width="5"
          />
        </svg>
      </button>
    </a>
  </section>
</template>
<script>
export default {}
</script>

<style scoped lang="sass">
textbase
section
  .hero-text
    @apply text-white font-serif font-normal opacity-75 tracking-normal mt-8
</style>

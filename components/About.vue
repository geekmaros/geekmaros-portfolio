<template>
  <section
    class="about font-serif text-xl bg-regal-purple h-screen py-8 px-5 sm:py-20 sm:px-40"
  >
    <header class="flex justify-start items-center relative mb-6">
      <span
        class="text-about text-2xl font-semibold sm:text-3xl opacity-75 text-white sm:font-semibold"
        >About Me</span
      >
    </header>

    <div
      class="about-content font-serif font-medium opacity-75 flex flex-col text-white"
    >
      <div class="about-compo">
        <p>
          Hola! I'm Abdulrasaq Mustapha also known as
          <a
            href="https://github.com/geekmaros"
            target="_blank"
            title="You can find me on all social media platform as @geekmaros"
            ><span class="text-regal-blue">geekmaros</span></a
          >, a Frontend Developer based in Nigeria(🇳🇬).
        </p>
        <p></p>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped lang="sass">
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

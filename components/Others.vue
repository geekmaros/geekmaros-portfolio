<template>
  <section
    id="work"
    class="work font-serif text-xl bg-regal-purple h-auto py-24 px-5 sm:py-0 sm:px-40 md:py-16 md:px-10 lg:pl-64 lg:pr-40 lg:pt-24 lg:pb-24"
  >
    <header class="flex justify-center items-center relative mb-6 lg:mb-12">
      <span
        class="text-project font-serif self-center text-2xl font-semibold sm:text-3xl text-white sm:font-semibold"
        >Some other activities</span
      >
    </header>

    <div class="card-wrapper grid grid-cols-3 gap-10">
      <div v-for="i in 6" :key="i" class="card flex flex-col">
        <div class="card-title">
          <a href="#" class="flex mt-5">
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
          <a href="#" class="flex mt-5">
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
        <header class="title">Weekly Calendar Planner</header>
        <p class="summary">
          Weekly Calendar Planner was my first ever vue project. it's a small
          frontend application that helps you plan your weekly schedule.
        </p>
        <p class="keywords">
          <span class="keyword">HTML</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>

<style scoped lang="sass">



@media screen and (min-width: 400px)
  section
    header



@media screen and (max-width: 768px)
  section
    .project-content
      .image-wrapper
        width: 100%





@media screen and (min-width: 1024px)
  section
    header
</style>

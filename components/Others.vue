<template>
  <section
    id="work"
    class="work font-serif text-xl bg-regal-purple h-auto py-24 px-5 sm:py-0 sm:px-40 md:py-16 md:px-10 lg:px-48 lg:pt-24 lg:pb-24"
  >
    <header
      class="text-center justify-center items-center relative mb-6 lg:mb-16"
    >
      <span
        class="text-project font-serif self-center text-2xl font-semibold sm:text-3xl text-white sm:font-semibold"
        >Some other activities</span
      >
      <div
        class="mt-4 text-project font-sans self-center text-2xl font-semibold sm:text-1xl text-white sm:font-semibold"
      >
        <span>Articles</span> <span>|</span> <span>Side Projects</span>
        <span>|</span>
        <span>Open Source</span>
      </div>
    </header>

    <div
      class="card-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-8 gap-8 mx-auto max-w-6xl relative"
    >
      <div
        v-for="(activity, index) in activities"
        :key="`activity-${index}`"
        class="card bg-aside-purple shadow-md pl-5 pt-5 pb-10 pr-4 rounded-lg cursor-pointer relative transform hover:-translate-y-3 transition duration-500 ease-in-out"
      >
        <div class="card-title flex justify-between items-center">
          <a :href="activity.githubLink" target="_blank" class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              class="lg:w-8 lg:h-8"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="#64ffda"
                d="M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z"
              />
            </svg>
          </a>
          <a :href="activity.liveSite" target="_blank" class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 194.818 194.818"
              class="md:h-5 md:w-5 h-5 w-5 lg:w-6 lg:h-6"
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
        <header
          class="title text-center md:text-left font-bold md:font-medium text-regal-blue text-lg md:text-2xl lg:text-2xl mt-4"
        >
          {{ activity.name }}
        </header>
        <p
          class="summary font-medium leading-loose text-base lg:text-sm text-justify md:text-left font-sans text-white text-base mt-8 md:mt-4"
        >
          {{ activity.summary }}
        </p>

        <div class="bottom-0 mb-10 md:bottom-0 md:mb-5">
          <div class="flex flex-wrap">
            <p
              v-for="(keyword, i) in activity.keywords"
              :key="`keyword-${i}`"
              class="keywords text-sm text-regal-blue mt-4 mr-5"
            >
              {{ keyword }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activities: [
         {
          name: 'Sahaba Quiz app',
          summary:
            'Test your Knowledge about the Sahaba by answering X numbers of random questions',
          keywords: ['Quiz app', 'Reactjs', 'Context API'],
          githubLink: 'https://github.com/geekmaros/sahabaquiz',
          liveSite: 'https://sahabaquiz.vercel.app/',
        },
          {
          name: 'API Versioning in Laravel 11',
          summary: "A technical articel on how to versio your laravel app",
          keywords: ['Laravel', 'Versioning'],
          githubLink: '#',
          liveSite:
            'https://blog.geekmaros.dev/api-versioning-in-laravel-11',
        },
        {
          name: 'Tandem Trivia Question (Quiz app)',
          summary:
            'Test your General Knowledge skills by answering 10 random questions',
          keywords: ['Quiz app', 'Vuejs', 'CSS3'],
          githubLink: 'https://github.com/geekmaros/tandem',
          liveSite: 'http://tandemtrivia.vercel.app/',
        },
        {
          name: 'Dynamically Add/Remove input fields using Vue.js',
          summary:
            "We all know how awesome Vuejs is as a frontend frame work and we are going to be exploring one of it's awesomeness by showing how to dynamically add or remove fields.",
          keywords: ['Article', 'Vuejs', 'Tailwind', 'Hashnode'],
          githubLink: '#',
          liveSite:
            'https://geekmaros.hashnode.dev/dynamically-addremove-input-fields-using-vuejs-ckhottr8o052ieks14uk41fhp',
        },
        {
          name: 'Vue Movie Search',
          summary:
            'Vue movie search is a simple web application for checking out latest and recent movie release. This was my first ever Vuejs project .',
          keywords: ['HTML5', 'CSS3', 'Vuejs', 'Vuex'],
          githubLink: 'https://github.com/geekmaros/vue-calendar-app',
          liveSite: 'https://vuelatestmovies.netlify.com/',
        },
        {
          name: 'Weekly Planner App',
          summary:
            "Weekly Calendar Planner was my first ever vue project. it's a small frontend application that helps you plan your weekly schedule.",
          keywords: ['HTML5', 'CSS3', 'Vuejs', 'Vuex'],
          githubLink: 'https://github.com/geekmaros/vuelatestmovies',
          liveSite: 'https://vuecalendarapp.netlify.com/',
        },
        {
          name: 'Vuetify Dashboard',
          summary:
            'I played around with Vuetify Material Design Component. Vuetify is a Material Design component framework for Vue.js ',
          keywords: ['HTML5', 'CSS3', 'Vuejs', 'Vuetify'],
          githubLink: 'https://github.com/geekmaros/vuelatestmovies',
          liveSite: 'https://vuecalendarapp.netlify.com/',
        },
        {
          name: 'simple TODO w/ React & Redux',
          summary:
            'A simple todo app I built trying to understand Redux library and it was a great learning curve for me in understanding how Redux works with React.',
          keywords: ['HTML5', 'CSS3', 'React', 'Redux'],
          githubLink: 'https://github.com/geekmaros/simpleTodoWithReduxs',
          liveSite: 'https://todowithreduxjs.netlify.app/',
        },
        {
          name: 'Article on JS {Object}',
          summary:
            'This was my first ever attempt into tech article writing. Here i wrote a about object as data type in Javascript and various manipulations that can be done on an object such as destructuring.',
          keywords: ['Article', 'Javascript', 'Object', 'Hashnode'],
          githubLink: '#',
          liveSite:
            'https://geekmaros.hashnode.dev/objects-in-javascripts-ck2s4ljf300iiiws1p9fbcw5y',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.card {
  height: auto;
}
</style>

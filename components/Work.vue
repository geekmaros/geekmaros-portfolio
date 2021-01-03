<template>
  <section
    id="experience"
    class="work font-serif text-xl bg-regal-purple h-auto py-24 px-5 sm:py-0 sm:px-40 md:py-16 md:px-10 lg:pl-64 lg:pr-40 lg:pt-24 lg:mb-32"
  >
    <header class="flex justify-start items-center relative mb-6">
      <span
        class="text-work text-2xl font-semibold sm:text-3xl text-white sm:font-semibold"
        >Where I've Worked</span
      >
    </header>
    <div class="work-place sm:mt-10 flex relative">
      <div
        class="work-tab flex sm:flex md-w-1/2 font-sans relative h-auto hidden"
      >
        <span class="active-tab" :style="{ top: spanPosition + 'px' }"></span>
        <div
          v-for="(place, i) in places"
          :key="`place-${i}`"
          ref="myActiveSpan"
          :class="{
            'active-span': activeTab === i,
          }"
          class="place w-full lg:w-8/12 text-white hover:bg-hover-purple"
          @click="getActiveTab(i)"
        >
          {{ place.employer }}
        </div>
      </div>
      <!--      Mobile View-->
      <div class="place-details mt-5 sm:mt-0 sm:hidden">
        <div
          v-for="(place, i) in places"
          :key="`place-det-${i}`"
          class="sub bg-aside-purple sm:bg-transparent mb-8 sm:mt-0 rounded-md py-5 px-4"
        >
          <div class="sub-heading">
            <h3 class="sd-title font-semibold text-white">
              {{ place.role }}
              <span class="text-regal-blue">@ {{ place.employer }}</span>
            </h3>
            <span class="date font-sans text-white text-sm">{{
              place.date
            }}</span>
          </div>
          <div class="sub-details text-base pt-4">
            <div
              v-for="(task, j) in place.tasks"
              :key="`place-task-${j}`"
              class="tasks flex items-start p-0"
            >
              <img
                class="h-3 mt-3 pr-2"
                src="/assets/svg/list-icon.svg"
                alt="list icon"
              />
              <p
                class="text-justify mt-2 opacity-75 text-base tracking-wide text-white flex items-start"
              >
                {{ task }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!--     On Desktop -->
      <div
        class="place-details flex h-full w-full sm:pl-3 md:-mt-4 mt-5 sm:mt-0 lg:-mt-4 hidden sm:block"
      >
        <div
          v-for="(place, i) in places"
          :key="`place-det-${i}`"
          v-show="activeTab === i"
          class="sub bg-aside-purple sm:bg-transparent sm:mt-0 rounded-md p-3"
        >
          <div class="sub-heading">
            <h3 class="sd-title font-semibold text-white">
              {{ place.role }}
              <span class="text-regal-blue">@ {{ place.employer }}</span>
            </h3>
            <span class="date font-sans text-white text-sm">{{
              place.date
            }}</span>
          </div>
          <div class="sub-details text-base pt-4">
            <div
              v-for="(task, j) in place.tasks"
              :key="`place-task-${j}`"
              class="tasks flex items-start p-0"
            >
              <img
                class="h-3 mt-4 pr-2"
                src="/assets/svg/list-icon.svg"
                alt="list icon"
              />
              <p
                class="text-justify mt-2 opacity-75 text-base tracking-wide text-white flex items-start"
              >
                {{ task }}
              </p>
            </div>
          </div>
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
      placess: [
        'GenSports',
        'Jadek Inc',
        'Demz Analytics',
        'Freyda Inc',
        'Al-Hikmah University',
        'WebRelated Consulting',
      ],
      places: [
        {
          role: 'Frontend Engineer',
          employer: 'GenSports',
          date: 'Nov 2020 - Present',
          tasks: [
            'Built custom media components to interact with uploads served from the Backend.',
            'Improved the user experience by implementing various user centered features and intuitive design.',
            'Improved legacy codebase..',
          ],
        },
        {
          role: 'Frontend Developer',
          employer: 'Jadek Inc',
          date: 'May 2020 - December 2020',
          tasks: [
            'Developed a rich user interface dashboard to track farm investments.',
            'Improved app by building a mobile responsive feature and optimized speed for better user experience.',
            'Worked closely with UI mockup designs to implement pixel by pixel ',
          ],
        },
        {
          role: 'Frontend Developer',
          employer: 'Demz Analytics',
          date: 'Nov 2019 - Feb 2020',
          tasks: [
            'Developed and maintained code for clientside dashboard usingHTML, CSS, SASS, Javascript and Vuejs.',
            'Integrating with RESTful APIs as a part of implementing Authentication and other third parties APIs.',
            ' Interacted closely with the UI team to ensure every pixel of UI design details was implemented.',
            'Improved UX by adding a dark mode to the existing design.',
          ],
        },
        {
          role: 'Frontend Developer',
          employer: 'Freyda Inc.',
          date: 'Aug 2019 - October 2019',
          tasks: [
            'Converted UI mockup design to web templates.',
            'Refined and improved the existing frontend code and design to meet the UI mockup design.',
            'Built various reusable web component to improve legacy code.',
            "Implemented a Progressive Web App feature for the company's website accompanied with SEO optimization.",
          ],
        },
        {
          role: 'Systems Programmer II',
          employer: 'Al-Hikmah University',
          date: 'July 2018 - April 2020',
          tasks: [
            'Improved existing University’s website and Webometrics.',
            'Developed a new feature to automate admission process for Faculty of  Post Graduate Schools.',
            'Built a Tech Community in the University to improve tech awareness.',
          ],
        },
        {
          role: 'Web Developer Intern',
          employer: 'WebRelated Consulting',
          date: 'Aug 2017 - Dec 2017',
          tasks: [
            'Worked on various client project as an Intern',
            'Did everything expected from an Intern',
          ],
        },
      ],
      activeTab: 0,
      spanPosition: null,
      color: 'red',
    }
  },
  computed: {
    tasks() {
      return this.places.tasks.filter((task) => task.length > 0)
    },
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
      width: 50%
      /*flex-basis: 30%*/
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
        width: 100%
        cursor: pointer
        font-size: .875rem
        margin-left: -2px

      .active-span.place
        color: var(--regal-blue)
        background-color: var(--hover-purple)

@media screen and (max-width: 414px)
  section

    header
      .text-work:after
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
      .text-work:after
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
      .text-work:after
        content: ''
        position: absolute
        height: 1px
        width: 30%
        top: 48%
        left: 30%
        opacity: 0.3
        background: var(--regal-blue)
</style>

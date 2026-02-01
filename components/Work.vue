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
            <span class="date font-sans text-white text-sm block">{{
                place.location
              }}</span>
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
          v-show="activeTab === i"
          :key="`place-det-${i}`"
          class="sub bg-aside-purple sm:bg-transparent sm:mt-0 rounded-md p-3"
        >
          <div class="sub-heading">
            <h3 class="sd-title font-semibold text-white">
              {{ place.role }}
              <span class="text-regal-blue">@ {{ place.employer }}</span>
            </h3>
            <span class="date font-sans text-white block text-sm">{{
                place.location
              }}</span>
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
      places: [
           {
          role: 'Senior Frontend Engineer',
          employer: 'FigureFlow',
          date: 'July 2025 - December 2025',
          location: 'Karlsruhe, Germany',
          tasks: [
            'Led a full dashboard UI revamp, improving data readability, layout hierarchy, and interaction clarity for financial analytics workflows.',
            'Designed and implemented a modular CMS-driven landing page, enabling non-technical updates without engineering involvement. improving development speed and maintainability.',
            'Integrated PostHog analytics to track user events, feature adoption, and behavior across dashboards and marketing pages.',
          ],
        },
        {
          role: 'Senio Frontend Engineer',
          employer: 'Sync Teams,',
          date: 'January 2025 - June 2025',
          location: ' Remote, USA',
          tasks: [
            'Led the frontend architecture overhaul of SyncTeams, transforming it from a static v1 prototype into a dynamic, modular v2 system with a fully visual node-based builder using Vue Flow, enabling non-technical users to intuitively orchestrate AI agents.
',
            'Engineered a reusable component system and configuration framework, supporting deeply nested, dynamic forms (memory, tools, knowledge, embedder modules), drastically improving development speed and maintainability.',
            'Implemented a performant and scalable visual editor UX with parent-child node hierarchy, snapping, interactive handles, and real-time validation,  enhancing the usability of complex multi-agent workflows and making the platform extensible for future tooling
',
          ],
        },
        {
          role: 'Frontend Engineer',
          employer: 'Papershift',
          date: 'October 2022 - May 2024',
          location: 'Karlsruhe, Germany',
          tasks: [
            'Assumed full ownership and maintenance of a critical system module essential for delivering exceptional service to our customers, ensuring its seamless integration and optimal performance.',
            'Play a pivotal role in code review processes and deployment cycles, upholding code quality standards and facilitating efficient software delivery.',
            'Contribute significantly to the comprehensive documentation of the system, streamlining the onboarding process for new team members and improving the overall developer experience, facilitating seamless collaboration and knowledge sharing.',
          ],
        },
        {
          role: 'Frontend Engineer II',
          employer: 'Linkfire',
          date: 'Aug 2021 - Jun 2022',
          location: 'Copenhagen, Denmark',
          tasks: [
            'Collaborated with the team to build a system architecture that resulted to 80% adoption by clients.',
            'Code review and deployment.',
            'Built solutions that helped reduced partner’s onboarding process from months and weeks to minutes.',
            'Integrated third-party API which improved product accessibility.',
          ],
        },
        {
          role: 'Systems Programmer II',
          employer: 'Al-Hikmah University',
          date: 'July 2018 - July 2022',
          location: 'Kwara, Nigeria',
          tasks: [
            'Improved existing University’s website and Webometrics.',
            'Developed a new feature to automate admission process for Faculty of  Post Graduate Schools.',
            'Built a Tech Community in the University to improve tech awareness.',
          ],
        },
        {
          role: 'Frontend Engineer',
          employer: 'GenSports',
          date: 'Nov 2020 - Feb 2021',
          location: 'Lagos, Nigeria',
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
          location: 'Lagos, Nigeria',
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
          location: 'London, United Kingdom',
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
          location: 'London, United Kingdom',
          tasks: [
            'Converted UI mockup design to web templates.',
            'Refined and improved the existing frontend code and design to meet the UI mockup design.',
            'Built various reusable web component to improve legacy code.',
            "Implemented a Progressive Web App feature for the company's website accompanied with SEO optimization.",
          ],
        },
        {
          role: 'Web Developer Intern',
          employer: 'WebRelated Consulting',
          date: 'Aug 2017 - Dec 2017',
          location: 'Lagos, Nigeria',
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

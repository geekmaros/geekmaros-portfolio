
export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Abdulrasaq Mustapha - Geekmaros',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Geekmaros is a Frontend Engineer who specialises in building digital product and experiences',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Abdulrasaq Mustapha - Geekmaros',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Geekmaros is a Frontend Engineer who specialises in building digital product and experiences',
      },
      {
        name: 'twitter:site',
        content: 'Abdulrasaq Mustapha - Geekmaros',
      },
      {
        property: 'og:site_name',
        content: 'Abdulrasaq Mustapha - Geekmaros',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'Geekmaros Portfolio',
      },

    //  copied from default
      {
        name: 'twitter:site',
        content: '@geekmaros',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        hid: "twitter:url",
        name: "twitter:url",
        content: "https://geekmaros.netlify.app",
      },
      {
        hid: "twitter:title",
        name: 'twitter:title',
        content: 'Abdulrasaq Mustapha - Geekmaros',
      },
      {
        hid: "twitter:description",
        name: 'twitter:description',
        content:
          'Geekmaros is a Frontend Engineer who specialises in building digital product and experiences',
      },

      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://res.cloudinary.com/geekmaros/image/upload/v1662504729/Official_Two.jpg',
      },
      {
        hid: "twitter:image",
        name: 'twitter:image',
        content: 'https://res.cloudinary.com/geekmaros/image/upload/v1662504729/Official_Two.jpg',
      },
      {

        name: 'og:image:width',
        content: '1200',
      },
      {
        name: 'og:image:height',
        content: '630',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@400;500;600;700&family=Quicksand:wght@400;500;600;700;800;900&family=Satisfy&display=swap',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['@/assets/sass/main.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/aos.client'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/components',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  components: true,
}

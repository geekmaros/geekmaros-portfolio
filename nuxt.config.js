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
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://geekmaros.netlify.app/',
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

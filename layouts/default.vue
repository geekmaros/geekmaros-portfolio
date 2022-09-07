<template>
  <div class="overflow-x-hidden overflow-y-hidden">
    <nuxt />
  </div>
</template>
<script>
// eslint-disable-next-line import/no-absolute-path
import ogImage from '../static/assets/images/Official Two.jpg'
export default {
  head() {
    return {
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
          Author: 'description',
          content:
            'Abdulrasaq Mustapha',
        },
        {
          name: 'robots',
          content:  'index, follow',
        },
        {
          name: 'canonical',
          content:
            'https://geekmaros.netlify.app/',
        },
        {
          name: 'og:title',
          property: 'og:title',
          content: 'Abdulrasaq | Frontend Engineer - Geekmaros',
        },
        {
          name: 'og:description',
          property: 'og:description',
          content:
            'Abdulrasaq | Frontend Engineer - Geekmaros is a Frontend Engineer who specialises in building digital product and experiences',
        },
        {
          name: 'twitter:site',
          content: 'Abdulrasaq | Frontend Engineer - Geekmaros',
        },
        {   name: 'og:site_name',
          property: 'og:site_name',
          content: 'Geekmaros',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: 'website',
        },

        {
          property: 'fb:profile_id',
          content: 'geekmaros',
        },
        {
          property: 'og:see_also',
          content: 'https://www.linkedin.com/in/maros94/',
        },
        {
          property: 'og:see_also',
          content: 'https://github.com/geekmaros',
        },
        {
          property: 'og:see_also',
          content: 'https://twitter.com/geekmaros',
        },
        {
          property: 'og:see_also',
          content: 'https://www.instagram.com/geekmaros/',
        },
        {
          property: 'og:see_also',
          content: 'https://www.youtube.com/channel/UC7VH99sMB5_ohKptI_7r_Qw?view_as=subscriber',
        },
        {
          hid: 'mobile-web-app-capable',
          property: 'mobile-web-app-capable',
          content: 'yes',
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
          content: 'Abdulrasaq | Frontend Engineer - Geekmaros',
        },
        {
          hid: "twitter:description",
          name: 'twitter:description',
          content:
            'Geekmaros is a Frontend Engineer who specialises in building digital product and experiences',
        },

        {
          name: 'og:image',
          property: 'og:image',
          content: 'https://res.cloudinary.com/geekmaros/image/upload/v1662504729/Official_Two.jpg',
        },
        {
          property: 'og:image:width',
          content: '160',
        },
        {
          property: 'og:image:height',
          content: '160',
        },
        {
          hid: "twitter:image",
          name: 'twitter:image',
          content: 'https://res.cloudinary.com/geekmaros/image/upload/v1662504729/Official_Two.jpg',
        },
      ],
    }
  },
}
</script>
<style></style>

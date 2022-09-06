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
        {
          name: 'twitter:site',
          content: '@geekmaros',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
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
          content: ogImage,
        },
        {
          hid: "twitter:image",
          name: 'twitter:image',
          content: ogImage,
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
    }
  },
}
</script>
<style></style>

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
          content: 'Abdulrasaq | Frontend Engineer - Geekmaros',
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
          content: 'https://res.cloudinary.com/geekmaros/image/upload/v1662504729/Official_Two.jpg',
        },

      ],
    }
  },
}
</script>
<style></style>

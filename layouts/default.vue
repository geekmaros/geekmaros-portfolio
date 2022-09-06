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
          hid: 'og:image',
          property: 'og:image',
          content: ogImage,
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: ogImage,
        },
        {
          property: 'og:image:width',
          content: '1200',
        },
        {
          property: 'og:image:height',
          content: '630',
        },
        {
          property: 'twitter:card',
          content: 'summary_large_image',
        },
      ],
    }
  },
}
</script>
<style></style>

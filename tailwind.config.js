/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Nunito', '-apple-system', 'BlinkMacSystemFont'],
      serif: ['"Hind Siliguri"', 'Georgia', 'Cambria'],
      mono: ['Satisfy', 'SFMono-Regular', 'Menlo'],
      display: ['Oswald'],
      body: ['Open Sans'],
    },
    extend: {
      colors: {
        'regal-purple': '#0a192f',
        'regal-blue': '#64ffda',
        'regal-pink': '#e66470',
        'brand-purple': '#42366d',
        'aside-purple': 'rgb(23, 42, 69)',
      },
    },
  },
  variants: {},
  plugins: [],
}

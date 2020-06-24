/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Quicksand', '-apple-system', 'BlinkMacSystemFont'],
      serif: ['"Hind Siliguri"', 'Georgia', 'Cambria'],
      mono: ['Satisfy', 'SFMono-Regular', 'Menlo'],
      display: ['Oswald'],
      body: ['Open Sans'],
    },
    extend: {
      colors: {
        'regal-purple': '#040817',
        'regal-blue': '#64ffda',
        'regal-pink': '#e66470',
        'brand-purple': '#42366d',
        'aside-purple': '#0b1330',
        'hover-purple': 'rgba(36,59,90,0.62)',
      },
      screens: {
        // xl: '1280px',
        // // => @media (max-width: 1279px) { ... }
        //
        // lg: '1024px',
        // // => @media (max-width: 1023px) { ... }
        //
        // md: '960px',
        // // => @media (max-width: 767px) { ... }
        //
        // sm: '640px',
        // // => @media (max-width: 639px) { ... }
        // xl: { max: '1279px' },
        // // => @media (max-width: 1279px) { ... },
        //
        // lg: { max: '1023px' },
        // // => @media (max-width: 1023px) { ... },
        //
        // md: { max: '767px' },
        // // => @media (max-width: 767px) { ... }.
        //
        // sm: { max: '639px' },
        // // => @media (max-width: 639px) { ... },
      },
    },
  },
  variants: {},
  plugins: [],
}

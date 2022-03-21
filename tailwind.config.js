const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './template-parts/**/*.php',
    './page-templates/**/*.php',
    './resources/js/**/*.{vue,js}',
    'header.php',
    'footer.php',
    'single.php',
    'index.php',
    'page.php',
    'single-news.php',
    'archive.php',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        lato: ['Lato', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'wpn': {
          DEFAULT: '#f97316',
          '50': '#fedfc9',
          '100': '#fdd3b5',
          '200': '#fcbb8d',
          '300': '#fba366',
          '400': '#fa8b3e',
          '500': '#f97316',
          '600': '#d25905',
          '700': '#9b4204',
          '800': '#642b03',
          '900': '#2d1301'
        }
      }
    },
  },

  plugins: [
    require('@tailwindcss/typography')
  ],
}

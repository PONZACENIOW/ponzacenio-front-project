const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.js', './src/**/*.tsx'],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      gridTemplateColumns: {
        '2-iauto': 'auto 1fr',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

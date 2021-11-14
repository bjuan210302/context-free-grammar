const { colors: defaultColors } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'custom-bg': '#ABB3CA',
        'custom-tab': '#EFF2F9',
        'custom-primary': '#6A74C9',
        'custom-primary-light': '#858dd0',
        'custom-secondary': '#4E4C81'
      }
    }
  },

  variants: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Helvetica'],
      'serif': ['Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'headline': "var(--headline-font-family)",
      'canela': ['Canela-Light'],
      'chap': ['Chap-Light'],
      'chap-bold': ['Chap-Bold'],
     },
     backgroundColor: theme => ({
      ...theme('colors'),
      'primary': "var(--background-color-primary)",
     })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

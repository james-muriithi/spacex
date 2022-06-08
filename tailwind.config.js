module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['D-DIN', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        white: "#FFFFFF",
        dark: "#000000",
      }
    }
  },
}
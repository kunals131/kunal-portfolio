/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primaryBg : '#151418',
        secondaryBg : '#242329'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
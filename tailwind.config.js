/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./pages/*.html','./js/*.js'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      sky: colors.sky,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    },
    extend: {
      colors: {
        Sd_Blue: '#2D2273',
        Sd_Darkblue: '#222059',
        Sd_Yellow: '#F2E205',
        Sd_Orange: '#F2811D',
        Sd_Black: '#0D0D0D',
      }
    },
  },
  plugins: [],
  daisyui: {
    themes: false,
  },
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage:{
        blur: 'url(/src/assets/background.png)',
        screen:'url(/src/assets/back-2.png)'
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        backDark: '#121214',
        back:'#191622',
        comment:'#5A4B81',
        selection: "#41414D",
        greenDark:"#67e480", 
        pink: '#FF79C6',
        grayMain: '#E1E1E6',
        borders: '#323238',
        shape:'#202024',
        purple: {
          300: "#996dff",
          500: "#9466ff",
          700: "#6833e4",
          dark: '#28203e'
        },
        darkGray: '#44475a',
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          500: '#81D8F7',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          100: '#E1E1E6',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: '#121214',
          900: '#09090A'
        }
      },
    },
  },
  plugins: [],
}

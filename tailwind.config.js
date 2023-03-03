/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/index.html'],
  theme: {
    colors: {
      'orange' : 'hsl(31, 77%, 52%)',
      'cyan' : 'hsl(184, 100%, 22%)',
      'dark-cyan' : 'hsl(179, 100%, 13%)',
      'tr-white' : 'hsla(0, 0%, 100%, 0.75)',
      'white' : 'hsl(0, 0%, 100%)',
      'gray' : 'hsl(0, 0%, 95%)',
    },
    fontSize: {
      base: '0.938rem',
      xl: '2.3rem',
    },
    extend: {
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    colors: {
      'orange': 'hsl(31, 77%, 52%)',
      'cyan' : 'hsl(184, 100%, 22%)',
      'dark-cyan' : 'hsl(179, 100%, 13%)',
      'white': 'hsla(0, 0%, 100%, 0.75)',
      'gray' : 'hsl(0, 0%, 95%)',
    },
    extend: {
    },
  },
  plugins: [],
}


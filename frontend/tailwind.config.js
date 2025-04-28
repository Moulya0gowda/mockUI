/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          serif: ['Spectral', 'serif'], // for Claude-like headers
        },
        colors: {
          clay: '#e7d7ce',
          offwhite: '#fdfcf9',
          beige: '#f7f6f3',
        },
      },
    },
    plugins: [],
  }
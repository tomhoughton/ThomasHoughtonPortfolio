/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'JIT',
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        tertiary: '#ff0000',
        tertiaryNotActive: '#00ff00'
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'JIT',
  content: ['./index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        tertiary: '#2cb67d',
        tertiaryNotActive: '#185a3f',
        background: '#000000',
        backgroundAlt: '#242629',
        button: '#7f5af0'
      }
    },
  },
  plugins: [],
}

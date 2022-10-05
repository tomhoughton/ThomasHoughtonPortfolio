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
      },
      boxShadow: {
        'lg': '0 -10px 0px 0px rgba(122, 90, 240, 1)',
        'md': '10px 10px 0px 0px rgba(44, 182, 125, 1)'
      }
    },
  },
  plugins: [],
}

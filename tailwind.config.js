/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      keyframes: {
        'translate-top': {
          '0%': { transform: 'translateY(13rem)' },
          '100%': { transform: 'translateY(0)' },
        },
        'translate-bottom': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(13rem)' },
        },
      },
      animation: {
        'translate-top': 'translate-top 250ms linear',
        'translate-bottom': 'translate-bottom 250ms linear',
      },
    },
  },
  plugins: [],
}
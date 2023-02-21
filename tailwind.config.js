/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        teal: {
          950: '#35bad8',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

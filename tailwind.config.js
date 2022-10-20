/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '1170px',
        xl: '1170px',
        '2xl': '1170px',
      },
    },
    fontFamily: {
      'title': ["'Lilita One'", 'cursive'],
    }
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {},
  plugins: [],
}
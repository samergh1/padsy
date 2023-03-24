/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'gray':'#edeff1',
      'green':'#00786A',
      'white':'#ffffff',
    },
    extend: {fontFamily: {
      sans: ['Poppins', 'sans-serif']
    }},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

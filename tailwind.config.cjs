/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
    },
    extend: {fontFamily: {
      sans: ['Poppins', 'sans-serif']
    }},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    // require('@tailwindcss/forms'),
  ],
}

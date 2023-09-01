/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'phone': {'max-width': '376px'},
      },
      colors:{
        Blue:"var(--Blue)",
        lightRed:"var(--lightRed)",
        softBlue:"var(--softBlue)",
        lightRedStudy:"var(--lightRedStudy)",
        limeGreen:"var(--limeGreen)",
        Violet:"var(--Violet)",
        softOrange:"var(--softOrange)",

        veryDarkBlue:"var(--veryDarkBlue)",
        darkBlue:"var(--darkBlue)",
        desaturatedBlue:"var(--desaturatedBlue)",
        paleBlue:"var(--paleBlue)"
      }
    },
  },
  plugins: [],
}
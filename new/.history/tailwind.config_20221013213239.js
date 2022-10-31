/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Montserrat': ['"Montserrat", sans-serif', ],
      'Roboto': ['"Roboto",  sans-serif', ],
      'Merienda': ['"Merienda",  cursive', ],
      'Poppins': ['"Poppins",  sans-serif', ],
    },
    color:{
      brand:{
        primary: "#ffbf00"
      }
    },
    extend: {},
  },
  plugins: [],
}

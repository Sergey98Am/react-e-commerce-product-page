const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports =  withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    container: {
      screens: {
        sm: "1110px",
      },
    },
    extend: {
      colors: {
        primary: "#1D2026",
        secondary: "#69707D",
        tertiary: "#FF7E1B",
        lightBlue: "#E4E9F2",
      },

      fontSize: {
        sm: "0.938rem",
      },
      fontFamily: {
        'sans': 'Kumbh Sans'
      },
    },
  },
  plugins: [],
});

const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
module.exports =  withMT({
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      screens: {
        sm: "1110px",
      },
    },
    extend: {
      colors: {
        primary: "#1D2026",
        secondary: "#69707D",
        secondaryLight: "#B6BCC8",
        tertiary: "#FF7E1B",
        tertiaryLight: "#FFEEE2",
        lightBlue: "#E4E9F2",
        lightBlue1: "#F6F8FD",
      },

      fontSize: {
        "xs-1": "0.813",
        sm: "0.938rem",
      },
      fontFamily: {
        'sans': 'Kumbh Sans'
      },
    },
  },
  plugins: [],
});

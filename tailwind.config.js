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

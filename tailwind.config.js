module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    container: {
      screens: {
        sm: "1110px",
      },
    },
    extend: {
      screens: {
        '2xl': '1400px',
      },
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
};

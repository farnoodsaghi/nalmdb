/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "royal-purple": "#743FD8",
        "off-black": "#1F1F1F",
        "light-grey": "#A8A8A8",
        "dark-grey": "#5F5C5C",
        "darker-grey": "#444444",
        "carbon-black": "#111111",
      },
      fontFamily: {
        sarabun: ["Sarabun", "san-serif"],
        viga: ["Viga", "san-serif"],
        dosis: ["Dosis", "san-serif"],
      },
      spacing: {
        "1/6f": "16.666667%",
        "1/5f": "20%",
        "19/30f": "63.333333%",
      },
      gridAutoColumns: {
        "7p": "calc((100% / 7) - (1.5rem * 6/7))",
        "6p": "calc((100% / 6) - (1.5rem * 5/6))",
        "5p": "calc((100% / 5) - (1.5rem * 4/5))",
        "4p": "calc((100% / 4) - (1.5rem * 3/4))",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },

        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
  ],
};

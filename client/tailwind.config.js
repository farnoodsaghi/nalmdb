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

/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        primary: "#1677BD",
        secondary: "#1E1E1E",
      },

    fontFamily: {
      'Lexend': [ '"Lexend", sans-serif' ],
      'Roboto': ['"Roboto", sans-serif' ],
    },

    },
  },
  darkMode: "class",
  plugins: [nextui()],
}


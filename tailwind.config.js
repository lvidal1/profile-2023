/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        RobotoMono: ["Roboto Mono", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dark-gray": "#2d2e32",
        "light-green": "#64f4a9"
      }
    },
  },
  plugins: [],
}

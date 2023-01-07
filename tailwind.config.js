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
        "black": "#25262a",
        "primary": "#efd81d",
        "purple": "#7e43ff",
        "green": "#64f4a9"
      },
      backgroundImage: {
        'pattern-circuit': "url('/img/circuit-board.svg')",
      },
      width: {
        '144': '32rem'
      },
      height: {
        '144': '32rem'
      },
      maxWidth: {
        '96': '24rem',
      },
      boxShadow: {
        'card': '0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%)',
      }
    },
  },
  plugins: [],
}

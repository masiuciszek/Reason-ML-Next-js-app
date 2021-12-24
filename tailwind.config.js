/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  mode: "jit",
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      title: ["Barlow", "sans-serif", ...defaultTheme.fontFamily.sans],
      body: ["Poppins", "sans-serif", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      flexGrow: {
        2: 2,
        3: 3,
      },
      colors: {
        transparent: "var(--color-transparent)",
      },

      height: theme => ({
        "header-height": "var(--header-height)",
        "footer-height": "var(--footer-height)",
        "main-height": "min-h-[calc(100vh-12rem)]",
      }),
      screens: {
        "xs-small": "320px",
      },
    },
  },
  variants: {},
  plugins: [],
}
// font-family: 'Barlow', sans-serif;
// font-family: 'Poppins', sans-serif;

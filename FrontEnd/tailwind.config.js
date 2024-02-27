/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      height: {
        90: "90%",
      },
      maxHeight: {
        "px-400": "400px",
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      minHeight: {
        "px-400": "400px",
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      minWidth: {
        "px-1300": "1300px",
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      maxWidth: {
        "px-1300": "1300px",
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
      colors: {
        CCCCCCC: "#CCCCCC",
        CACACAC: "#ACACAC",
        CD9D9D9: "#D9D9D9",
        C9F9F9F: "#9F9F9F",
      },
    },
  },
  plugins: [],
};

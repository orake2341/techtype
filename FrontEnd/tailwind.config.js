/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
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

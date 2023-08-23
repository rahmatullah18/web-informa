/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#1F1235",
          200: "#FFFFFF",
        },
        secondary: {
          100: "#CEE6FF",
          200: "#3583DD",
        },
        tertiary: {
          100: "#000000",
          200: "#ECEEFD",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

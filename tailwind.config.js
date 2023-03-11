/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#49714F",
          200: "#F4F4F6",
        },
        secondary: {
          100: '#010101',
          200: '#E4DEA1'
        },
        tertiary: {
          100: "#FFFFFF",
          200: '#B7BCC1'
        }
      }
    },
  },
  plugins: [],
}

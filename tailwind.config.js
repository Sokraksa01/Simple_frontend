/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg:"url('/src/assets/pic_page1/Background.png')",
      }
    },
  },
  plugins: [],
}
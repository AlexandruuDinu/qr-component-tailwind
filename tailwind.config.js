/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js, jsx, ts, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bodyContainerColor": "#D5E1EF",
        "subtitleTextColor": "#8d9098",
      },
    },
  },
  plugins: [],
}

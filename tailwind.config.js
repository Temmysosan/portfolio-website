/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};

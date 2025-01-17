/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
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

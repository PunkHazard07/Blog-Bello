/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {
       colors: {
        primarycolor: "#23245A"
        }

    },
  },
 plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
}

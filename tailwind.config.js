/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./engine.js",
    "./data.js", 
    "./tutorial.js", 
    "./assets/intranet/*.html",
    "./assets/data/*.js",
    "./assets/engine/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


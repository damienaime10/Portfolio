/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",                 // tes fichiers React
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}" // Flowbite
  ],
  theme: {
    extend: {}, // tu peux ajouter tes personnalisations ici
  },
  plugins: [
    require("flowbite/plugin","daisyui") // plugin Flowbite pour Tailwind
  ],
};

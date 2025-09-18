/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",                 // tes fichiers React
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}" // Flowbite
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      }   
    }, // tu peux ajouter tes personnalisations ici
    
  },
  
  plugins: [
    require("flowbite/plugin","daisyui") // plugin Flowbite pour Tailwind
  ],
};

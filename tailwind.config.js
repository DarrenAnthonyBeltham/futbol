/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark': '#111111',       
        'brand-light': '#F5F5F5',     
        'brand-accent': '#A3E635',    
        'brand-accent-dark': '#82B82A',
        'brand-gray': '#888888', 
        'brand-surface': '#1D1D1D',
      },
    },
  },
  plugins: [],
}
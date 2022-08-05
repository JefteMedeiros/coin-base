/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-primary' : '#111113',
        'background-secondary' : '#1d1d20',
        'text-color' : '#ffffff',
        'purple-400' : '#6022f2',
        'purple-500' : '#7640f5',
        'purple-600' : '#1b183f',
      },
      gap : {
        '8.75' : '8.75rem',
      },
      screens: {
        'sm': '380px',
  
        'md': '768px',
  
        'lg': '1024px',
  
        'xl': '1280px',
  
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}

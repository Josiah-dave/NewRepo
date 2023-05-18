/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {


        'xs': '300px',
        // => @media (min-width: 640px) { ... }

        'mini': '480px',
        // => @media (min-width: 640px) { ... }

        'tab': '600px',
        // => @media (min-width: 640px) { ... }
        
        'sm': '900px',
        // => @media (min-width: 640px) { ... }
        
        'xl': '1026px',
        // => @media (min-width: 1026px) { ... }


        'max': '680px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },

      colors: {
        "clr": '#044B61',
        "clr2": '#DEE5F0',
        // "clr3": '#774181',
        "clr4": '#352961',
     
      },
    },
  },
  plugins: [],
}
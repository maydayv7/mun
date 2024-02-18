/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // fontFamily:{
    //   'montserrat':'Montserrat, sans-serif'
    // },
    
    extend: {
      fontFamily:{
        'cabinet':['Cabinet-Grotesk'],
      },
      screens:{
        'letter':'950px'
      },
    },
  },
  plugins: [],
}


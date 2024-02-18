import defaultTheme from 'tailwindcss/defaultTheme';
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
        'montserrat':'Montserrat, sans-serif',
        'raleway':['Raleway', ...defaultTheme.fontFamily.sans]
      },
      screens:{
        'letter':'950px'
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        darkslateblue: "#3245a9",
        royalblue: "#596bcf",
        crimson: "#f8506b",
        khaki: "#fed470",
        lightsteelblue: "#aab4e7",
        mediumaquamarine: "#a0edc9",
      },
      spacing: {},
      fontFamily: {
        montserrat: "Montserrat",
        "cabinet-grotesk": "'Cabinet Grotesk'",
      },
    },
    fontSize: {
      xl: "20px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};


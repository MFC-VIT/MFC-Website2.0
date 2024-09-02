/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#e8ded5", //Use this for text color
        primary: "#ff6d00", // This is the primary orange color
        secondary: "#462907",
        dark: "#0a0807",
        'lighter-brown': '#462907',
        'darker-brown': '#3b1e00', 
      },
      fontFamily: {
        yoshiro: "yoshiro",
        yoshiro_b: "yoshiro_bold",
        apex: "apex",
        teko: "teko",
      },
      fontWeight: {
        normal: 400,
        bold: 700,
      },
    },  
  },
  plugins: [],
};

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
        'accent': '#ff6d00',
        'bg-dark': '#1a1a1a',
        'bg-card': '#2a2a2a',
        'brand-orange': '#ff6d00',
        'brand-orange-light': '#ff9a00',
        'neutral-900': '#171717', 
        'neutral-800': '#262626',
        'neutral-700': '#404040',
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
      perspective: {
        '1000': '1000px',
      },
      rotate: {
        'y-180': 'rotateY(180deg)',
      },
      backfaceVisibility: {
        'hidden': 'hidden',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
    },  
  },
  plugins:  [
    function ({ addUtilities }) {
      const newUtilities = {
        '.perspective-1000': {
          perspective: '1000px',
        },
        '.preserve-3d': {
          transformStyle: 'preserve-3d',
        },
        '.backface-hidden': {
          backfaceVisibility: 'hidden',
        },
        '.rotate-y-180': {
          transform: 'rotateY(180deg)',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};

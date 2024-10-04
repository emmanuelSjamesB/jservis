/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu Mono', ...defaultTheme.fontFamily.sans],
        ibm: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono]
      },
      backgroundImage: {
        'custom-img': "url('/src/assets/pc1.jfif')",
        'custom-img-2': "url('/src/assets/pc2.jfif')",
        'custom-img-3': "url('/src/assets/3.jpg')",
        'custom-img-4': "url('/src/assets/r1.jfif')",
        'custom-img-5': "url('/src/assets/r2.jfif')",
        'custom-img-6': "url('/src/assets/back.jpg')",
        
    },
    keyframes: {
      'slide-in': {
        '0%': { transform: 'translateX(-100%)' },
        '100%': { transform: 'translateX(0)' },
      },
      scroll: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-100%)' },
      },
      
    },
    animation: {
      'slide-in': 'slide-in 1s ease-out',
      scroll: 'scroll 10s linear infinite',
    },
    boxShadow: {
      'neon': '0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 40px #00ff00',
      'neon-red': '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 40px #ff0000',
      'neon-blue': '0 0 5px #0000ff, 0 0 10px #0000ff, 0 0 20px #0000ff, 0 0 40px #0000ff',
      'neon-purple': '0 0 5px #800080, 0 0 10px #800080, 0 0 20px #800080, 0 0 40px #800080',

    },
    textShadow: {
      'neon': '0 0 5px hotpink, 0 0 10px hotpink, 0 0 20px hotpink, 0 0 30px hotpink, 0 0 40px hotpink, 0 0 50px hotpink, 0 0 60px hotpink',
      'neon2': '0 0 5px white, 0 0 10px white, 0 0 20px white, 0 0 30px white, 0 0 40px white, 0 0 50px white, 0 0 60px white',
      'neonblack': '0 0 5px black, 0 0 10px white, 0 0 20px blue, 0 0 30px white, 0 0 40px white, 0 0 50px white, 0 0 60px black',
      'neonyellow': '0 0 5px black, 0 0 10px white, 0 0 20px yellow, 0 0 30px white, 0 0 40px yellow, 0 0 50px yellow, 0 0 60px yellow',
      'neongreen': '0 0 5px black, 0 0 10px white, 0 0 20px green, 0 0 30px white, 0 0 40px green, 0 0 50px green, 0 0 60px green',
      'neongrey': '0 0 5px black, 0 0 10px white, 0 0 20px blue, 0 0 30px white, 0 0 40px black, 0 0 50px black, 0 0 60px black',
      'neonpurple': '0 0 5px purple, 0 0 10px purple, 0 0 20px blue, 0 0 30px white, 0 0 40px black, 0 0 50px purple, 0 0 60px purple',
    },
  },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
}


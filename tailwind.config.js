/** @type {import('tailwindcss').Config} */

import tailwindScrollbar from 'tailwind-scrollbar'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        ring: "0 0 0 2px rgba(255, 255, 255, 0.1)", // Custom ring
      },
      fontFamily:{
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  variants:{
    extend:{
      ringWidth: ["responsive", "hover", "focus"],
    },
  },
  plugins: [tailwindScrollbar],
}

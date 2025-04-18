/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1d7e37",
        secondry: "#ff9c01",
        third: "#1d7e37",
        fourth: "#00bf63",
        fifth: "#a6ada8"
      },
      container: {
        center: true, 
        padding: {
          DEFAULT: '1rem',
          sm: '3rem',
        }
      }
    },
  },
  plugins: [],
};

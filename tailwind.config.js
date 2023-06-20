/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Cormorant Garamond", "serif"],
        inter: ["Inter", "serif"],
      },
      colors: {
        munsell: "#0792a5",
        cerulean: "#007ba5",
        aquamarine: "#7FFFD4",
        parchment: "#f0ead2",
        onyx: "#35373d",
        test1: "pink",
        test2: "lightgreen",
      },
    },
  },
  plugins: [],
};

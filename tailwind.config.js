/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#27ae60",
        secondary: "#a3cb38",
        accent: "#f1c40f",
        background: "#fcfcfc",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#3b82f6",
        neutral: "#FAFAFA",
        cloud: "#f8fafc",
      },
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"],
      },
    },
    plugins: [],
  },
};

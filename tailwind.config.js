/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#4A90E2", // Custom color (optional)
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Custom font (optional)
      },
    },
  },
  plugins: [],
}

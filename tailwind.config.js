/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        unirBg: "rgb(10, 18, 28)",
        unirPrimary: "rgb(48, 72, 102)",
        unirTitle: "rgb(168, 180, 196)",
        unirText: "rgb(200, 208, 220)",
        unirWhite: "rgb(245, 246, 247)"
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


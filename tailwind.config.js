/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "corp-blue": "#1E3A8A",
          "corp-gold": "#D4AF37",
        },
        fontFamily: {
          roboto: ["Roboto", "sans-serif"],
        },
      },
    },
    plugins: [],
  };
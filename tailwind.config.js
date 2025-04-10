/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "corp-blue": "#1E3A8A",    // Deep corporate blue
        "corp-gold": "#FBBF24",    // Vibrant gold
        "corp-teal": "#2DD4BF",    // Bright teal
        "corp-coral": "#F87171",   // Soft coral
        "corp-gray": "#F3F4F6",    // Light gray
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

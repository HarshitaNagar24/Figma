/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '5.67px 5.67px 3.78px 0px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, #888989 0%, #4A4E54 100%)',
      },
    },
  },
  plugins: [],
}


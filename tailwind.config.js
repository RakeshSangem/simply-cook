/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "recipe-thubail":
          "url('https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chicken_makhani.jpg/1200px-Chicken_makhani.jpg')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};

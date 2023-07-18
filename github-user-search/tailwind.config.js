/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        573: "573px",
        768: "768px",
      },
      height: {
        481: "481px",
      },
    },
  },
  plugins: [],
};

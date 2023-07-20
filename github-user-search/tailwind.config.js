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
      colors: {
        "regal-blue": "#4b6a9b",
      },
    },
  },
  plugins: [],
};

//#4b6a9b;

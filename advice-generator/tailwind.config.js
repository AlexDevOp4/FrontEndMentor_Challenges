/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        drkGreyBlue: "#313A48",
        greyBlue: "#4F5D74",
        neonGreen: "#53FFAA",
        lightCyan: "#CEE3E9",
      },
      inset: {
        "165px": "165px",
      },
    },
  },
  plugins: [],
};

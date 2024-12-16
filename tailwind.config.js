/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        tablet: "640px",
        desktop: "1440px",
      },
      fontFamily: { Outfit: ["Outfit", "sans-sefir"] },
    },
  },
  plugins: [],
};

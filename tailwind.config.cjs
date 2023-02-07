/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-clr": "hsl(var(--orange-clr))",
        "white-clr": "hsl(var(--white-clr))",
        "light-grey-clr": "hsl(var(--light-grey-clr))",
        "medium-grey-clr": "hsl(var(--medium-grey-clr))",
        "dark-blue-clr": "hsl(var(--dark-blue-clr))",
        "very-dark-blue-clr": "hsl(var(--very-dark-blue-clr))",
      },
      fontFamily: {
        overpass: ["Overpass", "sans-serif"],
      },
      fontSize: {
        default: ".9375rem",
      },
    },
  },
  plugins: [],
};

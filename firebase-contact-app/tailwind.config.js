/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#5A5959",
        yellow: "#FFEAAE",
        darkYellow: "#fcca3f",
        orange: "#f6820c",
      },
    },
  },
  plugins: [],
};

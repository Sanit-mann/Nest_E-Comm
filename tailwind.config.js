/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        Primary: "#3BB77E",
        Secondary: "#FDC040",
        Link_hov: "#343942",
        Text_Primary: "#1b1b1b",
        Text_Secondary: "#7e7e7e",
      },
    },
  },
  plugins: [],
};

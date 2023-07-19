/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      tango: "#17171a",
      white: "#ffffff",
      lightwhite: "#fafafa",
      minblue: "#e6e6f1",
      greybs: "#96969e",
      greywhite: "#aeaeb8",
      textGrade: "#c6c6c8",
      borderlint: "#27272a",
      // Configure your color palette here
    },
  },
  plugins: [],
};

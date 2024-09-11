/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        shadow1: "box-shadow: -2px 3px 1px 0px #0000001A; box-shadow: -1px 1px 2px 0px #FFFFFF40 inset",
        shadow2 : "box-shadow: -6px 4px 4px 0px #FFFFFF40 inset; box-shadow: 2px -3px 6px 0px #00000040 inset; box-shadow: -4px 8px 50px 4px #0000001A;"
      }
    },
  },
  plugins: [],
};

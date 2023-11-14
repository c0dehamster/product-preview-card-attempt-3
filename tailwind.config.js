/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
    screens: {
      md: "40rem",
      lg: "64rem"
    },
    colors: {
      "dark-cyan": "hsl(158, 36%, 37%)",
      "cream": "hsl(30, 38%, 92%)",
      "very-dark-blue": "hsl(212, 21%, 14%)",
      "dark-grayish-blue": "hsl(228, 12%, 48%)",
      black: "hsl(0, 0%, 0%)",
      white: "hsl(0, 0%, 100%)"
    },
    fontFamily: {
      "main": ["Montserrat", "sans-serif"],
      "heading": ["Fraunces", "serif"]
    },
    fontSize: {
      xs: "11px",
      s: "12px",
      base: "14px",
      l: "2rem"

    },
    borderRadius: {
      "0": "0px",
      "10": "10px",
    }
  },
  plugins: [],
}


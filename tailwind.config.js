/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--bg-color) / <alpha-value>)",
        surface: "rgb(var(--surface-color) / <alpha-value>)",
        gold: "rgb(var(--gold-color) / <alpha-value>)",
        textPrimary: "rgb(var(--text-primary) / <alpha-value>)",
        textSecondary: "rgb(var(--text-secondary) / <alpha-value>)",
        white: "rgb(var(--white-color) / <alpha-value>)",
        black: "rgb(var(--black-color) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

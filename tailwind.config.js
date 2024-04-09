/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primary: "#FF8000",
      },
      boxShadow: {
        main: "0 4px 6px -1px rgba(255, 128, 0, 0.1), 0 2px 4px -1px rgba(255, 128, 0, 0.06)",
      },
    },
  },
  plugins: [],
}


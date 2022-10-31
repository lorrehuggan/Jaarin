/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-light": "#d2e6db",
        primary: "#4A9C6D",
        "primary-dark": "#244c35",
        "base-dark": "#18181b",
        "base-dark-200": "#27272a",
        "base-dark-300": "#3f3f46",
        "base-light": "#fafafa",
        "base-light-200": "#f4f4f5",
        "base-light-300": "#e4e4e7",
        error: "#f43f5e",
        "error-dark": "#881337",
        warning: "#f97316",
        "warning-dark": "#9a3412",
        info: "#22d3ee",
        "info-dark": "#155e75",
      },
    },
  },
  plugins: [],
};

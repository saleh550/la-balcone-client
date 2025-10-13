/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#9333EA',
        accent: {
          light: '#FDE68A',
          DEFAULT: '#FBBF24',
          dark: '#B45309',
        },
      },
    },
  },
  plugins: [],
}

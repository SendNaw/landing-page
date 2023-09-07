/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#AD21FC',
        textPurple: '#918398',
        dark: '#110319',
        lightpurple: '#EFD3FE',
      }
    },
  },
  plugins: [],
}
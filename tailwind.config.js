/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // If you're using the `app/` directory
    "./pages/**/*.{js,ts,jsx,tsx}", // If you're using the `pages/` directory
    "./components/**/*.{js,ts,jsx,tsx}", // If you have a `components/` folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

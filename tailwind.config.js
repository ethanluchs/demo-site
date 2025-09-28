/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Poor contrast colors
        'poor-gray': '#9CA3AF',
        'poor-blue': '#60A5FA',
        'poor-green': '#34D399',
        'poor-text': '#6B7280',
      }
    },
  },
  plugins: [],
}
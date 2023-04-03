/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      istanbul_bridge: 'url(src/assets/istanbul-bridge.jpg)',
      forest: 'url(src/assets/forest.jpg)'
    }
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#54b689',
        'primary-bg': '#ecf3f1',
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      "syne-regular": ["Syne Regular"],
      "syne-medium": ["Syne Medium"],
      "syne-SemiBold": ["Syne SemiBold"],
      "syne-Bold": ["Syne Bold"],
      "syne-extraBold": ["Syne ExtraBold"],
      "jost-regular": ["Jost Regular"],
      "jost-medium": ["Jost Medium"],
      "jost-SemiBold": ["Jost SemiBold"],
      "jost-Bold": ["Jost Bold"],
      "jost-extraBold": ["Jost ExtraBold"],
      "poppins": ["Poppins", "sans-serif"]
    }
  },
  plugins: [],
}

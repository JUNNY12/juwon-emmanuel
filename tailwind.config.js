/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors:{
        "myBgColor":'#CCD6F6',
        "myTextColor":"#4A95D0",
        "navBg":"rgba(255,255,255, 0.2)",
      },
      "screens": {
        "xmd":'769px'
      }
    }
  },
  plugins: [],
}

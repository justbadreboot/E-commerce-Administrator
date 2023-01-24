/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "green100":"#2B97A4",
        "green80":"#3DB0BD",
        "green60":"#348D9F",
        "green40":"#99C6CF",
        "green20":"#CCE3E7",
        "pink100":"#FF8B8B",
        "pink80":"#FF9E9E",
        "pink60":"#F9CBCC",
        "pink40":"#FBDDDD",
        "pink20":"#FDEEEE",
        "blue100":"#001F5C",
        "blue80":"#334C7D",
        "blue60":"#66799D",
        "blue40":"#99A5BE",
        "blue20":"#CCD2DE",
        "blue0":"#E6E9EF",
        "black100":"#2C3131",
        "black80":"#626262",
        "black60":"#A9A9A9",
        "black40":"#CACACA",
        "black20":"#E9E9E9",
        "black0":"#FFFFFF",
        "success100":"#5CC560",
        "success80":"#75DB79",
        "success60":"#98E49B",
        "success40":"#BAEDBC",
        "success20":"#DDF6DE",
        "warning100":"#FFAB49",
        "warning80":"#FFBE72",
        "warning60":"#FFC887",
        "warning40":"#FFD7A7",
        "warning20":"#FFE7CA",
        "error100":"#EB4A4A",
        "error80":"#FF7474",
        "error60":"#EE9D9D",
        "error40":"#F3BEBE",
        "error20":"#F9DEDE",
        "info100":"#2685CA",
        "info80":"#519DD5",
        "info60":"#7DB6DF",
        "info40":"#A8CEEA",
        "info20":"#D4E7F4"
      }
    },
  },
  plugins: [],
}

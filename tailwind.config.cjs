/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#1d1d1d",
        secondary: "#ab5e40",
        thierd: "#37251b",
        title: "#0a3e5b",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        textMain: "rgb(0, 0, 0)",
        textNav: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Apple: ['Homemade Apple', "cursive"]
      },
      keyframes:{
        "sliding-img-up-1": {
          "0%": {transform: "translateY(0)"},
          "100%": {transform: "translateY(-615px)"}
          },
          "sliding-img-up-2": {
            "0%": {transform: "translateY(0)"},
            "100%": {transform: "translateY(-928px)"}
          },
          "sliding-img-down-1": {
            "0%": {transform: "translateY(-986px)"},
            "100%": {transform: "translateY(0)"}
          },
      },
      backgroundImage: {
        'spray': "url('./assets/spray.png')",
        'spray2': "url('./assets/spray2.png')",
       
      },
      animation:{
        "sliding-img-up-1": "sliding-img-up-1 30s linear infinite",
        "sliding-img-down-1": "sliding-img-down-1 30s linear infinite",
        "sliding-img-up-2": "sliding-img-up-2 30s linear infinite",
      },
      
      
      
    },
    screens: {
      ml: "300px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require('tailwindcss-3d'),
  ],
};
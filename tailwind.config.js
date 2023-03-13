/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],

  theme: {
    extend: {
      screens: {
        'esm':'300px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors:{
        landing:'#E5E5E5',
        small:'#BFBFBF',
        card_p:'#414141',
        spec_color1:'#FCD5BA',
        spec_color2:'#E5FFDE',
        map_btn1:'#F3F2F1',
        map_btn2:'#70C05B',
        news_btn1:'#E5FFDE',
        footer_color:'#F9F4E2',
      }
    },
    container:{
      center:true
    },
  },

  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#12b4ba",
        
"secondary": "#f776ce",
        
"accent": "#92aef4",
        
"neutral": "#1F2E37",
        
"base-100": "#F3F5F7",
        
"info": "#7EB4E7",
        
"success": "#168849",
        
"warning": "#F5D847",
        
"error": "#F31512",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
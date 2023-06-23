/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1200px',
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
    colors: {
      'black': '#000000',
      'off-black': '#100e0d',
      'white': '#ffffff',
      'blue': '#0066d2',
      'light-blue': '#2563eb',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'red': '#EB2436',
      'racky-orange': '#f7921d',
      'green': '#008d41',
      'yellow': '#f1c816',
      'dark-gray': '#4C4B49',
      'darker-gray': '#363839',
      'gray': '#848484',
      'medium-gray': "#bcbcbc",
      'light-gray': '#d9d9d9',
      'off-white': '#efefef',
      'bg-gray': '#d9d9d9',
      'almost-white': '#f5f5f5',
      'off-gray': '#8e8e8e',
      'transparent': 'transparent',
      'more-gray': '#E7E6E6',
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        'sm-x-margin': "1rem",
        'sm-y-spacing': "1rem",
        '80vh': "80vh",
        '70vh': "70vh",
        '60vw': "60vw",
        '50vw': "50vw",
        '60vh': "60vh",
        '50vh': "50vh",
        '55vh': "55vh",
        '40vh': "40vh"

      },
      backgroundImage: {
        // "header-bg": "url('https://cdn.rack-a-tiers.com/wp-content/uploads/2021/06/10224545/rack-footer-bg-crop.jpg')",
        // "footer-bg": "url('https://cdn.rack-a-tiers.com/wp-content/uploads/2022/07/26082948/background-gray.png')",
        // "catalog" : "url('https://cdn.rack-a-tiers.com/wp-content/uploads/2021/07/12163929/Covers-Collage-20pct.jpg')",
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        'heading': ['Barlow', 'serif'],
        'alfa': ['Alfa Slab One', 'serif'],
        // 'bitter': ['Bitter', 'serif'], 
        'body': ['Inter', 'Arial', 'Helvetica', 'sans-serif'],

      },
      fontSize: {
        '1': '1em',
        '2': '2em',
        '15': '15px',
        '18': '18px',
        '20': '20px',
        '25': '25px',
        '30': '30px',
        '40': '40px',
        '54': '54px',
      },
    }
  },
  plugins: [
  ],
}

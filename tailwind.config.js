/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '35px',
      screens: {
        sm: '100%',
        md: '100%',
        lg: '100%',
        xl: '1320px',
        
      },
      
    },
    screens: {
      'max-4xl': {'max': '1650px'}, 
      'max-3xl': {'max': '1399px'}, 
      'max-2xl': {'max': '1199px'}, 
      'max-xl': {'max': '991px'}, 
      'max-lg': {'max': '767px'}, 
      'max-md': {'max': '575px'}, 
      'max-sm': {'max': '480px'}, 
    },
    
    
    extend: {
      colors: {
        'dark-pink': '#F70086',
        'lightgrey':'#E4E4E4',
        'darkgrey':'#16151A',
      },
      fontSize:{
        '45px':'45px'
      },
      padding: {
        'ptA1': '130px',
        'cardpadding':'42px 14px 65px 14px',
        
      },
      maxWidth:{
          'max282':'282px'
      },
      
    }
  },
  plugins: []
}
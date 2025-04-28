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
        md: '768px',
        lg: '1024px',
        xl: '1320px',
      },
      
    },
    
    
    extend: {
      colors: {
        'dark-pink': '#F70086',
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
      screens: {
        'max-xsd': {'max': '480px'}, 
        'max-smd': {'max': '575px'}, 
        'max-mdd': {'max': '767px'}, 
        'max-lgd': {'max': '991px'}, 
        'max-xld': {'max': '1199px'}, 
        'max-xxl': {'max': '1399px'}, 
        'max-xxxl': {'max': '1650px'}, 
      }
    }
  },
  plugins: []
}
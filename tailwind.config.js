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
      
    },
    extend: {
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
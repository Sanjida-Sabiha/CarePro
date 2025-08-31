/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    // Disable default container sizes
    container: {
      // Default values will be overridden
      center: true,
      padding: '0',
    },
    extend: {
      container: {
        center: true, 
        padding:'18px',
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1288px",
        },
      },
      fontFamily:{
        "Satoshi":["Satoshi", "sans-serif"],
      },
      colors:{
        'primaryColor':'#000000',
        'secondaryColor':'#4C4C4C',
        'spanColor':'#8C8C8C',
        'btnBg':'#D3E682',
        'cardBg':'#F2EEEB',
        'cardBg1':'#087A6A',
        'borderColor':'#D9D9D9',
        'footerBg':'#022520',
        'hoverBg':'#BFD855',
      },
      borderRadius:{
        '100':'100px',
        '10':'10px',
        '20':'20px',
      },
      fontSize: {
        '22xl':'22px',
        '24xl': '24px',
        '26xl': '26px',
        '28xl':'28px',
        '30xl': '30px',
        '38xl':'38px',
        '40xl':'40px',
        '44xl':'44px',
        '48xl':'48px',
        '50xl':'50px',
        '60xl':'60px',
        '70xl':'70px',
        '80xl':'80px',
      },
      lineHeight: {
        '8': '30px',
        '32':'32px',
        '36':'36px',
        '38':'38px',
        '40':'40px',
        '42':'42px',
        '50':'50px',
        '54':'54px',
        '58':'58px',
        '64':'64px',
        '70':'70px',
        '80':'80px',
        '90':'90px',
      },
      spacing:{
        '330':'330px',
        '414':'414px',
        '488':'488px',
        '580':'580px',
        '595':'595px',
        '605':'605px',
        '634':'634px',
        '692':'692px',
        '702':'702px',
        '738':'738px',
        '755':'755px',
        '794':'794px',
        '850':'850px',
        '840':'840px',
        '900':'900px',
        '960':'960px',
        '1056':'1056px',
        '1400':'1400px',
      },
      boxShadow:{
        'contactshadow': '0px 30px 100px 0px #00000012',

      }
    },
  },
  plugins: [],
}


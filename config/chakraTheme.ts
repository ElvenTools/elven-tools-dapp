// Chakra UI specific theme and variables configuration
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        minHeight: '100vh',
        overflowX: 'hidden',
        bgColor: 'black',
        bgSize: '700px',
        backgroundPositionX: '150px',
        color: 'elvenTools.white',
      },
      '*': {
        '&::-webkit-scrollbar': {
          width: 1.5,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: 'elvenTools.dark.base',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'elvenTools.light',
          borderRadius: 1.5,
        },
        scrollbarWidth: 'auto',
        scrollbarColor: 'elvenTools.light elvenTools.dark.base',
      },
    },
  },
  fonts: {
    heading: `'Cubic Five 12', sans-serif`,
    body: `'Cubic Five 10', sans-serif`,
  },
  colors: {
    ghostLand: {
      bgStripes: '#2c3440',
      shadowColor: '#141414',
      dark: {
        lighter: 'rgb(0, 0, 0, 0.1)',
        base: 'rgb(0, 0, 0, 0.5)',
        darker: '#000',
      },
      light: '#FAFFFD',
      white: '#ffffff',
      color1: {
        lighter: 'rgb(109, 208, 246, 0.1)',
        base: '#549db9',
        darker: '#6dd0f6',
      },
      color2: {
        lighter: 'rgb(229, 232, 241, 0.1)',
        base: 'rgb(229, 232, 241, 0.2)',
        darker: 'rgb(229, 232, 241, 1)',
      },
      color3: {
        lighter: '#fb9567',
        base: '#FA824C',
        darker: '#f9611c',
      },
    },
    elvenTools: {
      bgStripes: '#2c3440',
      shadowColor: '#141414',
      dark: {
        lighter: '#3c4757',
        base: '#222831',
        darker: '#1d222a',
      },
      light: '#FAFFFD',
      white: '#ffffff',
      color1: {
        lighter: '#59a1ea',
        base: '#3C91E6',
        darker: '#1c7bda',
      },
      color2: {
        lighter: '#b0dd49',
        base: '#A2D729',
        darker: '#8ab722',
      },
      color3: {
        lighter: '#fb9567',
        base: '#FA824C',
        darker: '#f9611c',
      },
    },
  },
  components: {
    Alert: {
      variants: {
        subtle: {
          container: {
            bg: 'elvenTools.dark.lighter',
          },
        },
      },
    },
  },
  breakpoints: {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1560px',
  },
});

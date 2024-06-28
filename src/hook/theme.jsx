import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    light: {
      bg: '#FFFFFF',
      h1: '#101010',
      h2: '#CCCCCC',
      h3: '#7F7F7F',
      text: '#333333',
    },
    dark: {
      bg: '#101010',
      h1: '#FFFFFF',
      h2: '#404040',
      h3: '#888888',
      text: '#CFCFCF',
    },
  },
});

export default theme;

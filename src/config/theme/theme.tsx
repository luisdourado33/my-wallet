import React from 'react';

import '@fontsource/inter';

import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

const theme = {
  colors: {
    solid: '#06283D',
    normal: '#1363DF',
    clean: '#47B5FF',
    light: '#DFF6FF'
  },
  fonts: [],
  fontSizes: {
    small: '',
    medium: '',
    large: ''
  }
};

const chakraTheme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`
  }
});

export const ThemeProvider: React.FC<any> = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      <ChakraProvider theme={chakraTheme}>
        {children}
      </ChakraProvider>
    </StyledComponentsThemeProvider>
  );
};
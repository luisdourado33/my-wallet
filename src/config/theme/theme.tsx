import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

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

export const ThemeProvider: React.FC<any> = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      {children}
    </StyledComponentsThemeProvider>
  );
};
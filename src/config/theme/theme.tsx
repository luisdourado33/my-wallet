import React from 'react';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

const theme = {
  colors: {},
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
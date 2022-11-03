import {ThemeProvider} from '@emotion/react';
import React from 'react';
import {theme} from './src/assets/theme';
import Navigation from './src/navigations';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
};

export default App;

import React from 'react';
import { honeyFlower } from './ui/themes';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import Routes from './routes';

const theme = createMuiTheme(honeyFlower);

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Routes />
  </MuiThemeProvider>
);

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';

import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

import { AppRoutes } from './routes/app.routes';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <AppRoutes />
    </ThemeProvider>
  </React.StrictMode>,
);

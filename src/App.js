import React from 'react';
import './App.scss';
import { useRoutes } from 'react-router-dom';
import ReactGA from 'react-ga';
import { ThemeProvider } from '@mui/material/styles';
import routes from './routes';
import initFontAwesome from './utils/initFontAwesome';
import theme from './theme';

const trackingId = process.env.REACT_APP_ANALYTICS_ID;
initFontAwesome();

function App() {
  const content = useRoutes(routes);

  ReactGA.initialize(trackingId, {
    debug: true,
  });

  return (
    <ThemeProvider theme={theme}>
      {content}
    </ThemeProvider>
  );
}

export default App;

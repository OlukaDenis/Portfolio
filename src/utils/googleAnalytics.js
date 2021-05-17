import { useEffect } from 'react';
import ReactGA from 'react-ga';

// ReactGA.initialize(process.env.REACT_APP_ANALYTICS_ID, {
//   debug: true,
// });

export const makePageView = pathName => ReactGA.pageview(pathName);

export const setPageView = pathName => ReactGA.set({ page: pathName });

export const useAnalytics = pathName => useEffect(() => {
  makePageView(pathName);
  setPageView(pathName);
}, [pathName]);

export const analyticsEvent = (action, category) => {
  ReactGA.event({
    category,
    action: `Visited: ${action}`,
  });
};

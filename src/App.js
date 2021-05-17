import React from 'react';
import './App.scss';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import AboutLayout from './containers/AboutLayout';
import ProjectsLayout from './containers/ProjectsLayout';
import SkillsLayout from './containers/SkillsLayout';
import BlogLayout from './containers/BlogLayout';
import SideBar from './components/SideBar';
import initFontAwesome from './utils/initFontAwesome';

const history = createBrowserHistory();
const trackingId = process.env.REACT_APP_ANALYTICS_ID;
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

initFontAwesome();

const App = () => {
  ReactGA.initialize(trackingId);

  return (
    <Router history={history}>
      <div id="colorlib-page">
        <SideBar />
        <div id="colorlib-main">
          <Switch>
            <Route exact path="/" component={AboutLayout} />
            <Route path="/projects" component={ProjectsLayout} />
            <Route path="/skills" component={SkillsLayout} />
            <Route path="/blog" component={BlogLayout} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;

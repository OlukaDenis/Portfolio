import React from 'react';
import './App.scss';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import ReactGA from 'react-ga';
import AboutLayout from './containers/AboutLayout';
import ProjectsLayout from './containers/ProjectsLayout';
import SkillsLayout from './containers/SkillsLayout';
import BlogLayout from './containers/BlogLayout';
import SideBar from './components/SideBar';
import initFontAwesome from './utils/initFontAwesome';

const trackingId = process.env.REACT_APP_ANALYTICS_ID;
initFontAwesome();

const App = () => {
  ReactGA.initialize(trackingId, {
    debug: true,
  });

  return (
    <Router>
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

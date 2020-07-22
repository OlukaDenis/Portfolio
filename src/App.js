import React from 'react';
import './App.scss';
import {
  Route,
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import AboutLayout from './containers/AboutLayout';
import ProjectsLayout from './containers/ProjectsLayout';
import SkillsLayout from './containers/SkillsLayout';
import BlogLayout from './containers/BlogLayout';
import SideBar from './components/SideBar';
import initFontAwesome from './utils/initFontAwesome';

initFontAwesome();

const App = () => (
  <Router>
    <div id="colorlib-page">
      <SideBar />
      <div id="colorlib-main">
        <Switch>
          <Route exact path="/" component={AboutLayout} />
          <Route exact path="/projects" component={ProjectsLayout} />
          <Route exact path="/skills" component={SkillsLayout} />
          <Route exact path="/blog" component={BlogLayout} />
        </Switch>
      </div>
    </div>
  </Router>
);

export default App;

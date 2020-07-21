import React from 'react';
import './App.scss';
import {
  Route,
  HashRouter,
} from 'react-router-dom';
import AboutLayout from './containers/AboutLayout';
import ProjectsLayout from './containers/ProjectsLayout';
import SkillsLayout from './containers/SkillsLayout';
import BlogLayout from './containers/BlogLayout';
import SideBar from './components/SideBar';
import initFontAwesome from './utils/initFontAwesome';

initFontAwesome();

const App = () => (
  <HashRouter>
    <div id="colorlib-page">
      <SideBar />
      <div id="colorlib-main">
        <Route exact path="/" component={AboutLayout} />
        <Route path="/projects" component={ProjectsLayout} />
        <Route path="/skills" component={SkillsLayout} />
        <Route path="/blog" component={BlogLayout} />
      </div>
    </div>
  </HashRouter>
);

export default App;

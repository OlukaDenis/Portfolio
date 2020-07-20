import React from 'react';
import './App.scss';
import {
  Route,
  NavLink,
  HashRouter,
} from 'react-router-dom';
import { BreakpointProvider, Breakpoint } from 'react-socks';
import AboutLayout from './components/AboutLayout';
import ProjectsLayout from './components/ProjectsLayout';
import SkillsLayout from './components/SkillsLayout';
import BlogLayout from './components/BlogLayout';
import SideBar from './components/SideBar';
import NavBar from './components/navbar/Navbar';
import initFontAwesome from './utils/initFontAwesome';

initFontAwesome();

export default class App extends React.Component {
  render() {
    return (
      <BreakpointProvider>
        <HashRouter>
          <div>
            <Breakpoint large up>
              <SideBar />
            </Breakpoint>
            <Breakpoint medium down>
              <NavBar />
            </Breakpoint>
            <div id="colorlib-main">
              <Route exact path="/" component={AboutLayout} />
              <Route path="/projects" component={ProjectsLayout} />
              <Route path="/skills" component={SkillsLayout} />
              <Route path="/blog" component={BlogLayout} />
            </div>

          </div>
        </HashRouter>
      </BreakpointProvider>
    );
  }
}

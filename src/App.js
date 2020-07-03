import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import AboutLayout from './components/AboutLayout';
import ProjectsLayout from './components/ProjectsLayout';
import SkillsLayout from './components/SkillsLayout';
import NavBar from './components/NavBar';
import initFontAwesome from './utils/initFontAwesome';

initFontAwesome();

export default class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i /></a>
          <aside
            id="colorlib-aside"
            role="complementary"
            className="js-fullheight text-center"
          >
            <h1 id="colorlib-logo">
              <NavLink to="/">
                <span />
                Denis
                <span> </span>
              </NavLink>
            </h1>
            <nav id="colorlib-main-menu" role="navigation">
              <ul>
                <li><NavLink exact to="/" className="nav-link"> About </NavLink></li>
                <li><NavLink to="/projects" className="nav-link"> Projects </NavLink></li>
                <li><NavLink to="/skills" className="nav-link"> Skills </NavLink></li>
                <li><NavLink to="/blog" className="nav-link"> Blog </NavLink></li>
              </ul>
            </nav>

            <div id="resume-button">
              <NavLink to="/resume" className="btn btn-primary"> Resume </NavLink>
            </div>
            <div id="hire-button">
              <a className="btn btn-primary" href="mailto:olukadeno@gmail.com" target="_blank">Hire Me</a>
            </div>

            <div className="colorlib-footer">
              <ul>
                <li>
                  <a
                    href="https://www.facebook.com/dennylucaz"
                    target="blank"
                  >
                    <i className="icon-facebook" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/dennylucaz"
                    target="blank"
                  >
                    <i className="icon-twitter" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/dennylucaz"
                    target="blank"
                  >
                    <i className="icon-instagram" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/denis-oluka-73758185/"
                    target="blank"
                  >
                    <i className="icon-linkedin" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/OlukaDenis"
                    target="blank"
                  >
                    <i className="icon-github" />
                  </a>
                </li>
                <li>
                  <a href="skype:deniz.lucaz" target="blank"><i className="icon-skype" /></a>
                </li>
              </ul>
            </div>
          </aside>

          <div id="colorlib-main">
            <Route exact path="/" component={AboutLayout} />
            <Route path="/projects" component={ProjectsLayout} />
            <Route path="/skills" component={SkillsLayout} />
        </div>

        </div>
      </HashRouter>
    );
  }
}

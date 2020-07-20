import React, { useState } from 'react';
import '../App.scss';
import '../scss/NavBar.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  HashRouter,
} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import initFontAwesome from '../utils/initFontAwesome';

initFontAwesome();

export default function SideBar() {
  const [expandedLinks, setExpandedLinks] = useState(false);

  const toggleLinks = () => () => {
    setExpandedLinks(!expandedLinks);
  };

  return (
    <HashRouter>
      <div className="d-flex flex-column side-bar">
        <div className="menu-bars side-bar-menu" onClick={toggleLinks()}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
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
        </aside>
      </div>
    </HashRouter>
  );
}

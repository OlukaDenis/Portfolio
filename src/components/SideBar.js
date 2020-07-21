import React from 'react';
import '../App.scss';
import '../scss/NavBar.scss';
import {
  NavLink,
  HashRouter,
} from 'react-router-dom';
import initFontAwesome from '../utils/initFontAwesome';
import NavBar from './navbar/Navbar';

initFontAwesome();

export default function SideBar() {
  return (
    <HashRouter>
      <div className="side-bar-menu">
        <NavBar />
      </div>
      <aside
        id="colorlib-aside"
        className="js-fullheight text-center"
      >
        <div id="colorlib-logo">
          <NavLink to="/">
            <img src="images/logo.png" alt="Denny Logo" />
          </NavLink>
        </div>
        <nav id="colorlib-main-menu" role="navigation">
          <ul>
            <li><NavLink exact to="/" className="nav-link"> About </NavLink></li>
            <li><NavLink to="/projects" className="nav-link"> Projects </NavLink></li>
            <li><NavLink to="/skills" className="nav-link"> Skills </NavLink></li>
            <li><NavLink to="/blog" className="nav-link"> Blog </NavLink></li>
          </ul>
        </nav>

        <div id="resume-button">
          <a
            href="https://docs.google.com/document/d/1VFzAuigGH8sAw9jthdutik0dYWDmfR3QE3-GFLnym8k/edit?usp=sharing"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Resume
          </a>
        </div>
        <div id="hire-button">
          <a
            className="btn btn-primary"
            href="mailto:olukadeno@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hire Me
          </a>
        </div>
      </aside>
    </HashRouter>
  );
}

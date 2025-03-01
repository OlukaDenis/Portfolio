import React from 'react';
import '../App.scss';
import '../scss/NavBar.scss';
import { NavLink } from 'react-router-dom';
import ReactGA from 'react-ga';
import initFontAwesome from '../utils/initFontAwesome';
import NavBar from './navbar/Navbar';

initFontAwesome();

export default function SideBar() {
  ReactGA.initialize('UA-161206924-2');

  const registerResumeAnalytics = () => {
    ReactGA.event({
      category: 'Resume',
      action: 'View my resume',
    });
  };

  const registerHireAnalytics = () => {
    ReactGA.event({
      category: 'Hire Me',
      action: 'Send a hire me email',
    });
  };

  return (
    <>
      <div className="side-bar-menu">
        <NavBar />
      </div>
      <aside
        id="colorlib-aside"
        className="js-fullheight text-center"
      >
        <div id="colorlib-logo">
          <NavLink to="/">
            <img src="images/logo.svg" alt="Denny Logo" />
          </NavLink>
        </div>
        <nav id="colorlib-main-menu" role="navigation">
          <ul>
            <li><NavLink exact to="/" activeClassName="nav-link--active" className="nav-link"> About </NavLink></li>
            <li><NavLink exact to="/projects" activeClassName="nav-link--active" className="nav-link"> Projects </NavLink></li>
            {/* <li>
              <NavLink exact to="/skills" activeClassName="nav-link--active" className="nav-link">
                Skills
              </NavLink>
            </li> */}
            <li><NavLink exact to="/blog" activeClassName="nav-link--active" className="nav-link"> Blog </NavLink></li>
          </ul>
        </nav>

        <div
          id="resume-button"
          onClick={() => registerResumeAnalytics}
          onKeyDown={() => registerResumeAnalytics}
          role="button"
          tabIndex="0"
        >
          <a
            href="https://docs.google.com/document/d/1gkeeAt9EburW4Lg5hFsrlz8cYgnSqcpyNeO2m1WfA7Y/edit?usp=sharing"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            Resume
          </a>
        </div>
        <div
          id="hire-button"
          onClick={() => registerHireAnalytics}
          onKeyDown={() => registerHireAnalytics}
          role="button"
          tabIndex="0"
        >
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
    </>
  );
}

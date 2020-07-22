import React from 'react';
import '../App.scss';
import '../scss/NavBar.scss';
import { Link } from 'react-router-dom';
import initFontAwesome from '../utils/initFontAwesome';
import NavBar from './navbar/Navbar';

initFontAwesome();

export default function SideBar() {
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
            <Link to="/">
              <img src="images/logo.png" alt="Denny Logo" />
            </Link>
          </div>
          <nav id="colorlib-main-menu" role="navigation">
            <ul>
              <li><Link exact to="/" className="nav-link"> About </Link></li>
              <li><Link exact to="/projects" className="nav-link"> Projects </Link></li>
              <li><Link exact to="/skills" className="nav-link"> Skills </Link></li>
              <li><Link exact to="/blog" className="nav-link"> Blog </Link></li>
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
      </>
  );
}

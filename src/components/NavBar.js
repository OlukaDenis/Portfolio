import React from 'react';
import '../App.scss';
import About from '../pages/About';
import Projects from '../pages/Projects';
import initFontAwesome from "../utils/initFontAwesome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
initFontAwesome();

export default class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></a>
        <aside
        id="colorlib-aside"
        role="complementary"
        className="js-fullheight text-center"
        >
          <h1 id="colorlib-logo">
            <Link to={'/'}><span></span>Denis<span> </span></Link>
          </h1>
          <nav id="colorlib-main-menu" role="navigation">
            <ul>
              <li className="colorlib-active"><Link to={'/'} className="nav-link"> About </Link></li>
              <li><Link to={'/projects'} className="nav-link"> Projects </Link></li>
              <li><Link to={'/contact'} className="nav-link"> Contact </Link></li>
            </ul>
          </nav>

          <div id="resume-button">
            <Link to={'/resume'} className="btn btn-primary"> Resume </Link>
          </div>
          <div id="hire-button">
            <a className="btn btn-primary" href="mailto:olukadeno@gmail.com" target="_blank">Hire Me</a>
          </div>
        
        	<div className="colorlib-footer">
            <ul>
              <li>
                <a href="https://www.facebook.com/dennylucaz"
                target="blank"><i className="icon-facebook"></i
                ></a>
              </li>
              <li>
                <a href="https://twitter.com/dennylucaz"
                target="blank"><i className="icon-twitter"></i
                ></a>
              </li>
              <li>
                <a href="https://instagram.com/dennylucaz"
                target="blank"><i className="icon-instagram"></i
                ></a>
              </li>
              <li>
                <a href="https://linkedin.com/in/denis-oluka-73758185/"
                target="blank"><i className="icon-linkedin"></i
                ></a>
              </li>
              <li>
                <a href="https://github.com/OlukaDenis"
                target="blank"><i className="icon-github"></i
                ></a>
              </li>
              <li>
                <a href="skype:deniz.lucaz" target="blank"><i className="icon-skype"></i></a>
              </li>
            </ul>
          </div>
      </aside>
        <div id="colorlib-main">
          <Switch>
              <Route exact path='/' component={About} />
              <Route path='/projects' component={Projects} />
          </Switch>
        </div>
      </Router>      
    );
  }
};
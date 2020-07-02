import React from 'react';
import './App.scss';
import AboutLayout from './components/AboutLayout';
import ProjectsLayout from './components/ProjectsLayout';
import NavBar from './components/NavBar'
import initFontAwesome from "./utils/initFontAwesome";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
initFontAwesome();

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
        </Router>
      </div>
    );
  }
};
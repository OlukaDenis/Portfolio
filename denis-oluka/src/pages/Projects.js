import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import ProjectsLayout from '../components/ProjectsLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Projects extends Component {
  render() {

    return (
        <ProjectsLayout />
    );
  }
}
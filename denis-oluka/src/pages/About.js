import React, { Component } from 'react';
import { Layout, Typography } from 'antd';
import AboutLayout from '../components/AboutLayout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class About extends Component {
  render() {

    return (
        <AboutLayout />
    );
  }
}
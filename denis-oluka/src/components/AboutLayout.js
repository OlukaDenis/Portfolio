import React from 'react';
import { Layout, Form, Input, Checkbox, Button, Row, Col, Typography, Divider } from "antd";
import 'antd/dist/antd.css';
import '../App.scss';
import { FacebookFilled, GoogleOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
const { Content } = Layout;
const { Title } = Typography;

export default function AboutLayout() {

  return (
    <div
      class="hero-wrap js-fullheight "
      data-stellar-background-ratio="0.5"
    >
      <div
        class="js-fullheight d-flex justify-content-center align-items-center"
      >
        <div class="col-md-8 text-center">
          <div class="about-author">
            <h4>Hello, my name is</h4>
            <h1 class="mb-4">Denis Oluka</h1>
            <h5 class="mb-4 title">Full-stack developer.</h5>
            <p class="mb-4 info">
              I'm a creative software developer currently based in Kampala-Uganda. I have experience in distributed and remote first-teams.
            </p>
              <div class="social-icons">
                <ul class="text-center">
                  <li>
                    <a href="https://www.facebook.com/dennylucaz"
                    target="_blank" ><i class="icon-facebook"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://twitter.com/dennylucaz"
                    target="_blank" ><i class="icon-twitter"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://instagram.com/dennylucaz"
                    target="_blank" ><i class="icon-instagram"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/denis-oluka-73758185/"
                    target="_blank" ><i class="icon-linkedin"></i
                    ></a>
                  </li>
                  <li>
                    <a href="https://github.com/OlukaDenis"
                    target="_blank" ><i class="icon-github"></i
                    ></a>
                  </li>
                  <li>
                    <a href="skype:deniz.lucaz" target="blank"><i class="icon-skype"></i></a>
                  </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
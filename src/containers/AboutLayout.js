import React from 'react';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import '../scss/About.scss';

export default function AboutLayout() {
  return (
    <section id="about" className="about-section text-center">
      <Container>
        <Row>
          <Col>
            <div className="about-author">
              <h4>Hello, my name is</h4>
              <h1 className="name">Denis Oluka</h1>
              <h5 className="title">Full-stack developer.</h5>
              <p className="info">
                I&apos;m a creative software developer currently based in Kampala-Uganda.
                I have experience in distributed and remote first-teams.
              </p>
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/dennylucaz" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/dennylucaz" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                  </li>
                  <li>
                    <a href="https://angel.co/u/denis-oluka" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={['fab', 'angellist']} />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/denis-oluka" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/OlukaDenis" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                  </li>
                  <li>
                    <a href="skype:deniz.lucaz" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={['fab', 'skype']} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

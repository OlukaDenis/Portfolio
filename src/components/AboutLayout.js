import React from 'react';
import 'antd/dist/antd.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';
import '../App.scss';

export default function AboutLayout() {

  return (
      <section id="about" className="about-section text-center">
        <Container>
          <Row>
            <Col>
            <div class="about-author">
              <h4>Hello, my name is</h4>
              <h1 class="name">Denis Oluka</h1>
              <h5 class="title">Full-stack developer.</h5>
              <p class="info">
                I'm a creative software developer currently based in Kampala-Uganda. I have experience in distributed and remote first-teams.
              </p>
                <div class="social-icons">
                  <ul class="text-center">
                    <li>
                      <Link to="https://www.facebook.com/dennylucaz" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://twitter.com/dennylucaz" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://angel.co/u/denis-oluka" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={['fab', 'angellist']} />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://linkedin.com/in/denis-oluka" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                      </Link>
                    </li>
                    <li>
                      <Link to="https://github.com/OlukaDenis" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                      </Link>
                    </li>
                    <li>
                    <Link to="skype:deniz.lucaz" target="_blank" rel="noopener">
                        <FontAwesomeIcon icon={['fab', 'skype']} />
                      </Link>
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
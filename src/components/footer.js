import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope, faMapMarkerAlt, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import '../scss/footer.scss';

const Footer = () => (
  <footer className="ftco-footer ftco-bg-dark ftco-section">
    <Container className="px-md-5">
      <Row>
        <div className="col-md-12">
          <div className="ftco-footer-widget">
            <h2 className="ftco-heading-2">Let&apos;s Connect</h2>
            <div className="block-23 mb-3">
              <p>
                {' '}
                <span>
                  {' '}
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                </span>
                <span> Plot 67B Bugoloobi, Kampala-Uganda</span>
              </p>
              <p>
                {' '}
                <span>
                  {' '}
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span> +256 773 047 940</span>
              </p>
              <p>
                {' '}
                <span>
                  {' '}
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span> olukadeno@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </Row>
      <Row>
        <Col className=" copyright text-center">
          <hr />

          <div className="social-icons">
            <ul className="text-center">
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
          
          <p>
            Copyright | Denis &copy;
            {' '}
            <span>{(new Date().getFullYear())}</span>
          </p>

        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

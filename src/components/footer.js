import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode, faEye, faEnvelope, faMapMarkerAlt, faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import '../scss/footer.scss';

const Footer = () => (
  <footer className="ftco-footer ftco-bg-dark ftco-section">
    <Container className="px-md-5">
      <Row>
        <div className="col-md-12">
          <div className="ftco-footer-widget">
            <h2 className="ftco-heading-2">Hire Me</h2>
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
        <Col md={24} className=" copyright text-center">
          <hr />
          Copyright | Denis &copy;
          {' '}
          <span>{(new Date().getFullYear())}</span>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;

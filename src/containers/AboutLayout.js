import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import ReactGA from 'react-ga';
import '../scss/About.scss';

export default class AboutLayout extends React.Component {
  constructor() {
    super();
    this.socialAnalytics = this.socialAnalytics.bind(this);
  }

  componentDidMount() { window.scrollTo(0, 0); }

  socialAnalytics(link) {
    ReactGA.event({
      category: 'Social',
      action: `Visited: ${link}`,
    });
  }

  render() {
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
                  A passionate a creative software developer.  I have experience in 
                  designing, development, and testing fully scalable products and systems.
                </p>
                <div className="social-icons">
                  <ul>
                    <li>
                      <a
                        href="https://www.facebook.com/dennylucaz"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => this.socialAnalytics('Facebook profile')}
                      >
                        <FontAwesomeIcon icon={['fab', 'facebook']} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/dennylucaz"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => this.socialAnalytics('Twitter profile')}
                      >
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://angel.co/u/denis-oluka"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => this.socialAnalytics('Angelist profile')}
                      >
                        <FontAwesomeIcon icon={['fab', 'angellist']} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://linkedin.com/in/denis-oluka"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => this.socialAnalytics('LinkedIn profile')}
                      >
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/OlukaDenis"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => this.socialAnalytics('GitHub profile')}
                      >
                        <FontAwesomeIcon icon={['fab', 'github']} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="skype:deniz.lucaz"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => this.socialAnalytics('Skype profile')}
                      >
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
}

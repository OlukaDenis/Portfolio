import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import ReactGA from 'react-ga';
import Typist from 'react-typist';
import '../scss/About.scss';

const AboutLayout = () => {
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onDone = () => setTyping(true);
  const onDefaultTyping = () => setTyping(false);

  const StartTyping = () => (typing
    ? (
      <Typist
        className="title"
        avgTypingDelay={60}
        startDelay={0}
        onTypingDone={onDefaultTyping}
      >
        <Typist.Delay ms={200} />
        Freelancer
        <Typist.Backspace count={10} delay={2000} />
        <Typist.Delay ms={200} />
      </Typist>
    )

    : (
      <Typist
        className="title"
        avgTypingDelay={80}
        startDelay={0}
        onTypingDone={onDone}
      >

        <Typist.Delay ms={500} />
        Full-stack developer
        <Typist.Backspace count={20} delay={2000} />
        <Typist.Delay ms={200} />

        <Typist.Delay ms={200} />
        Mentor
        <Typist.Backspace count={6} delay={2000} />
        <Typist.Delay ms={200} />

        <Typist.Delay ms={200} />
        Designer
        <Typist.Backspace count={8} delay={2000} />
        <Typist.Delay ms={200} />
      </Typist>
    ));
  const socialAnalytics = link => {
    ReactGA.event({
      category: 'Social',
      action: `Visited: ${link}`,
    });
  };

  return (
    <section id="about" className="about-section text-center">
      <Container>
        <Row>
          <Col>
            <div className="about-author">
              <h4>Hello, my name is</h4>
              <h1 className="name">Denis Oluka</h1>

              <StartTyping />

              <p className="info">
                A passionate creative software developer.  I have experience in
                designing, development, and testing fully scalable products and systems.
              </p>
              <div className="social-icons">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/dennylucaz"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => socialAnalytics('Facebook profile')}
                    >
                      <FontAwesomeIcon icon={['fab', 'facebook']} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/dennylucaz"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => socialAnalytics('Twitter profile')}
                    >
                      <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://angel.co/u/denis-oluka"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => socialAnalytics('Angelist profile')}
                    >
                      <FontAwesomeIcon icon={['fab', 'angellist']} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/denis-oluka"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => socialAnalytics('LinkedIn profile')}
                    >
                      <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/OlukaDenis"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => socialAnalytics('GitHub profile')}
                    >
                      <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="skype:deniz.lucaz"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => socialAnalytics('Skype profile')}
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
};

export default AboutLayout;

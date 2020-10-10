import React, { Component } from 'react';
import '../scss/Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode, faEye,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import ReactGA from 'react-ga';
import Footer from '../components/footer';
import Loading from '../components/loading';

export default class ProjectsLayout extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: '',
      loading: true,
    };
    this.projectAnalytics = this.projectAnalytics.bind(this);
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    const response = await fetch('data/projects.json');
    response
      .json()
      .then(result =>	this.setState({ data: result, loading: false }))
      .catch(err => this.setState({ error: err, loading: false }));
  }

  projectAnalytics(link) {
    this.setState({ error: '' });
    ReactGA.event({
      category: 'Projects',
      action: `Visited: ${link}`,
    });
  }

  render() {
    const { data, loading, error } = this.state;
    return (
      <div id="projects">
        <section className="ftco-section">
          <h1 className="heading-title">Projects</h1>
          <Container>
            <Row>
              {(() => {
                if (loading) {
                  return <Loading />;
                }
                return error ? <p>Error</p>
                  : data.map(element => (
                    <Col key={element.id} md={6} lg={6} sm={10} className="project-col">
                      <div className="blog-entry" >
                        <div className="img img-2">
                          <div className="detail-overlay">
                            <ul>
                              <li>
                                <a
                                  href={element.liveLink}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  onClick={() => this.projectAnalytics(element.liveLink)}
                                >
                                  <FontAwesomeIcon icon={faEye} />
                                </a>
                              </li>
                              <li>
                                <a
                                  href={element.github}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  onClick={() => this.projectAnalytics(element.github)}
                                >
                                  <FontAwesomeIcon icon={faCode} />
                                </a>
                              </li>
                            </ul>
                          </div>
                          <img src={element.image} alt={element.name} />
                        </div>

                        <div className="text text-2 pt-2 mt-3">
                          <div className="category">
                            {
															element.tags.map(tag => <span key={tag.id}>{tag.name}</span>)
														}
                          </div>

                          <h3 className="project-title">
                            <a
                              href={element.liveLink}
                              rel="noopener noreferrer"
                              target="_blank"
                              onClick={() => this.projectAnalytics(element.liveLink)}
                            >
                              {element.name}
                            </a>
                          </h3>
                          <p className="project-desc">
                            {element.description}
                            {' '}
                          </p>
                        </div>
                      </div>
                    </Col>

                  ));
              })()}

            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    );
  }
}

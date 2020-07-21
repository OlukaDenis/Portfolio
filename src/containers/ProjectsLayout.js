import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../scss/Project.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode, faEye,
} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
  }

  async componentDidMount() {
    const response = await fetch('data/projects.json');
    response
      .json()
      .then(result =>	this.setState({ data: result, loading: false }))
      .catch(err => this.setState({ error: err, loading: false }));
  }

  render() {
    const { data, loading, error } = this.state;
    return (
      <div id="projects">
        <div className="hero-wrap">
          <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-8 text text-center">
              <div className="desc">
                <h1 className="heading-title">Projects</h1>
              </div>
            </div>
          </div>
        </div>
        <section className="ftco-section">
          <Container>
            <Row>
              {(() => {
                if (loading) {
                  return <Loading />;
                }
                return error ? <p>Error</p>
                  : data.map(element => (
                    <Col key={element.id} md={6} lg={6} sm={10}>
                      <div className="blog-entry">
                        <div className="img img-2" style={{ backgroundColor: '#eee' }}>
                          <div className="detail-overlay">
                            <ul>
                              <li>
                                <a href={element.liveLink} rel="noopener noreferrer" target="_blank">
                                  <FontAwesomeIcon icon={faEye} />
                                </a>
                              </li>
                              <li>
                                <a href={element.github} rel="noopener noreferrer" target="_blank">
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
                            <Link to={element.liveLink} target="_blank">
                              {element.name}
                            </Link>
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

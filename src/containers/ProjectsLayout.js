import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../scss/Project.scss';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/footer';
import Loading from '../components/loading';
import { fetchProjects } from '../store/actions/index';
import { useAnalytics, analyticsEvent } from '../utils/googleAnalytics';

const ProjectsLayout = () => {
  const projectState = useSelector(state => state.projectReducer);
  const { loading, projects, error } = projectState;
  const dispatch = useDispatch();

  const location = useLocation();
  useAnalytics(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div id="projects">
      <section className="ftco-section">
        <h1 className="heading-title">Projects</h1>
        <Container>
          <Row>
            { loading && <Loading /> }
            { error ? <p>Error</p>
              : projects && projects.map(element => (
                <Col key={element.id} md={6} lg={6} sm={10} className="project-col">
                  <div className="blog-entry">
                    <div className="img img-2">
                      <div className="detail-overlay">
                        <ul>
                          <li>
                            <a
                              href={element.liveLink}
                              rel="noopener noreferrer"
                              target="_blank"
                              onClick={() => analyticsEvent(element.liveLink, 'Projects')}
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </a>
                          </li>
                          <li>
                            <a
                              href={element.github}
                              rel="noopener noreferrer"
                              target="_blank"
                              onClick={() => analyticsEvent(element.github, 'Projects')}
                            >
                              <FontAwesomeIcon icon={faCode} />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="project-pic">
                        <img src={element.image} alt={element.name} />
                      </div>
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
                          onClick={() => analyticsEvent(element.liveLink, 'Projects')}
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
              ))}

          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default ProjectsLayout;

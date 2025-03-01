import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../scss/Project.scss';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEye } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import Footer from '../components/footer';
import Loading from '../components/loading';
import fetchProjects from '../store/actions/project.action';
import { useAnalytics, analyticsEvent } from '../utils/googleAnalytics';

export default function ProjectsLayout() {
  const projectState = useSelector((state) => state.projectReducer);
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
        <h1 className="heading-title">My  Work</h1>
        <Container>
          <Row>
            {loading && <Loading />}
            {error ? <p>Error</p>
              : projects && projects.map((element) => (
                <Col key={element.id} md={6} lg={6} sm={10} className="project-col">
                  <div className="blog-entry">
                    <div className="img img-2">
                      <div className="detail-overlay">
                        <ul>
                          <li>
                            <a
                              href={element.liveUrl}
                              rel="noopener noreferrer"
                              target="_blank"
                              onClick={() => analyticsEvent(element.liveUrl, 'Projects')}
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </a>
                          </li>
                          <li>
                            <a
                              href={element.codeUrl}
                              rel="noopener noreferrer"
                              target="_blank"
                              onClick={() => analyticsEvent(element.codeUrl, 'Projects')}
                            >
                              <FontAwesomeIcon icon={faCode} />
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="project-pic">
                        <img src={element.coverImage} alt={element.title} />
                      </div>
                    </div>

                    <div className="text text-2 pt-2 mt-3">
                      <div className="category">
                        {
                          element.tags.map((tag) => <span key={tag}>{tag}</span>)
                        }
                      </div>

                      <h3 className="project-title">
                        <a
                          href={element.liveUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                          onClick={() => analyticsEvent(element.liveUrl, 'Projects')}
                        >
                          {element.title}
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
}

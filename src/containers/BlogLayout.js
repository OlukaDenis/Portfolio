import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';
import '../scss/Blog.scss';
import Footer from '../components/footer';
import Loading from '../components/loading';
import { fetchBlogs } from '../store/actions/index';

const BlogLayout = () => {
  const blogReducer = useSelector(state => state.blogReducer);
  const { loading, error, blogs } = blogReducer;
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchBlogs());
  }, [dispatch]);

  const blogAnalytics = link => {
    ReactGA.event({
      category: 'Blog',
      action: `Visited: ${link}`,
    });
  };

  return (
    <div>
      <section className="ftco-section">
        <h1 className="heading-title">Blog</h1>
        <Container>
          <Row>
            {
              loading ? <Loading />
                : error ? <p>Error</p>
                  : blogs && blogs.map(blog => (
                    <Col key={blog.id} md={10} lg={12} sm={10} style={{ margin: '0 auto' }}>
                      <div className="blog-item d-flex flex-column flex-lg-row">
                        <img className="blog-image flex-fill" src={blog.image} alt={blog.title} />

                        <div className="blog-info flex-fill">
                          <h2>
                            <a
                              href={blog.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => blogAnalytics(blog.link)}
                            >
                              {blog.title}
                            </a>
                          </h2>
                          <p className="blog-desc">{blog.desc}</p>
                          <div className="blog-meta d-flex flex-row align-items-center justify-content-between">
                            <p>{blog.date}</p>
                            <a
                              href={blog.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-primary link-btn"
                              onClick={() => blogAnalytics(blog.link)}
                            >
                              <FontAwesomeIcon icon={faAngleRight} />
                            </a>
                          </div>

                        </div>

                      </div>
                    </Col>
                  ))
            }
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default BlogLayout;

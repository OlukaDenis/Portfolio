import React, { Component } from 'react';
import '../App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';
import '../scss/Blog.scss';
import Footer from '../components/footer';
import Loading from '../components/loading';

export default class BlogLayout extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: '',
      loading: true,
    };
    this.blogAnalytics = this.blogAnalytics.bind(this);
  }

  async componentDidMount() {
    window.scrollTo(0, 0);
    const response = await fetch('data/blogs.json');
    const res = response.json();
    res
      .then(result =>	this.setState({ data: result, loading: false }))
      .catch(err => this.setState({ error: err, loading: false }));
  }

  blogAnalytics(link) {
    this.setState({ error: '' });
    ReactGA.event({
      category: 'Blog',
      action: `Visited: ${link}`,
    });
  }

  render() {
    const { data, loading, error } = this.state;

    return (
      <div>
        <section className="ftco-section">
          <h1 className="heading-title">Blog</h1>
          <Container>
            <Row>
              {(() => {
                if (loading) {
                  return <Loading />;
                }
                return error ? <p>Error</p>
                  : data.map(blog => (
                    <Col key={blog.id} md={10} lg={12} sm={10} style={{ margin: '0 auto' }}>
                      <div className="blog-item d-flex flex-column flex-lg-row">
                        <img className="blog-image flex-fill" src={blog.image} alt={blog.title} />

                        <div className="blog-info flex-fill">
                          <h2>
                            <a
                              href={blog.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => this.blogAnalytics(blog.link)}
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
                              onClick={() => this.blogAnalytics(blog.link)}
                            >
                              <FontAwesomeIcon icon={faAngleRight} />
                            </a>
                          </div>

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

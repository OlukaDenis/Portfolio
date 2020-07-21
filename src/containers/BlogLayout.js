import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
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
  }

  async componentDidMount() {
    const response = await fetch('data/blogs.json');
    const res = response.json();
    res
      .then(result =>	this.setState({ data: result, loading: false }))
      .catch(err => this.setState({ error: err, loading: false }));
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
                    <Col key={blog.id} md={10} lg={12} sm={10}>
                      <div className="blog-item d-flex flex-column flex-lg-row">
                        <img className="blog-image flex-fill" src={blog.image} alt={blog.title} />

                        <div className="blog-info flex-fill">
                          <h2>
                            <a
                              href={blog.link}
                              target="_blank"
                              rel="noopener noreferrer"
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

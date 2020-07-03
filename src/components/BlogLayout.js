import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../App.scss';
import { Container, Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import '../scss/Blog.scss';

export default class BlogLayout extends Component {
	
	state = { 
		data: [],
		error: '',
	};

	async componentDidMount() {
		const response = await fetch('data/blogs.json');
		const res = response.json();
		res.then(result =>	this.setState({data: result}))
  }
  
  render() {
    const { data } = this.state;
    return (
      <section className="ftco-section">
        	<h1 className="heading-title">Blog</h1>
					<Container>
						<Row>
              {
                data.map(blog => (
                  <Col key={blog.id} md={10} lg={12} sm={10}>
                    <div className="blog-item d-flex flex-column flex-lg-row">
                      <img className="blog-image flex-fill" src={blog.image} alt={blog.title}/>
                      
                      <div className="blog-info flex-fill">
                        <h2>
                          <a 
                            href={blog.link}
                            target="_blank"
                            rel="noreferrer">
                              {blog.title}
                          </a>
                        </h2>
                        <p className="blog-desc">{blog.desc}</p>
                        <div className="blog-meta d-flex flex-row align-items-center justify-content-between">
                          <p>{blog.date}</p>
                          <a 
                            href={blog.link}
                            target="_blank"
                            rel="noreferrer" 
                            className="btn btn-primary link-btn">
                            <FontAwesomeIcon icon={faAngleRight}/>
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
    );
  }
}
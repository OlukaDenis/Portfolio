import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import '../scss/Skill.scss';
import Footer from '../components/footer';
import Loading from '../components/loading';

export default class SkillsLayout extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      error: '',
      loading: true,
    };
  }

  async componentDidMount() {
    const response = await fetch('data/skills.json');
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
          <h1 className="heading-title">Skills</h1>
          <Container>
            <Row>
              {(() => {
                if (loading) {
                  return <Loading />;
                }
                return error ? <p>Error</p>
                  : data.map(skill => (
                    <Col key={skill.id} md={12} lg={12} sm={12}>
                      <div className="skill-item">
                        <h2>{skill.title}</h2>
                        <div className="skill-list">
                          {
                          skill.skills.map(ele => (
                            <div key={ele.id} className="text-center skill">
                              <img src={ele.image} alt={ele.name} />
                              <p>{ele.name}</p>
                            </div>
                          ))
                        }
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

import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import '../App.scss';
import { Container, Row, Col } from 'react-bootstrap';
import '../scss/Skill.scss';
import Footer from '../components/footer';
import Loading from '../components/loading';
import { fetchSkills } from '../store/actions/index';

const SkillsLayout = () => {

  const skillReducer = useSelector(state => state.skillReducer);
  const { loading, error, skills } = skillReducer;
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSkills());
  }, [dispatch]);

  return (
    <div>
      <section className="ftco-section">
        <h1 className="heading-title">Skills</h1>
        <Container>
          <Row>
            {
              loading ? <Loading />
              : error ? <p>Error</p>
              : skills && skills.map(skill => (
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
                ))
            }
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );

}

export default SkillsLayout;

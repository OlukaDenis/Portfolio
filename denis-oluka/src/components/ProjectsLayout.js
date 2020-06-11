import React, { Component } from 'react';
import 'antd/dist/antd.css';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faEye, faEnvelope, faMapMarkerAlt, faPhone} from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class ProjectsLayout extends Component {
	
	state = { 
		data: [],
		error: '',
	};

	async componentDidMount() {
		const response = await fetch('data/projects.json');
		const res = response.json();
		res.then(result =>	this.setState({data: result}))
	}


	render() {
		return(
		<>
			<div className="hero-wrap" >
					<div className="d-flex justify-content-center align-items-center" >
						<div className="col-md-8 text text-center">
							<div className="desc">
								<h1 className="mb-4">My Projects</h1>
							</div>
						</div>
					</div>
				</div>
				<section className="ftco-section">
					<Container>
						<Row>
								{
									this.state.data.map(element => (
										
											<Col md={6}>
											<div className="blog-entry">
												<div className="img img-2" style={{backgroundColor: '#eee'}}>
													<div className="detail-overlay">
														<ul>
															<li>
																<Link to={element.liveLink} rel="noopener" target="_blank">
																	<FontAwesomeIcon icon={faEye}/>
																</Link>
															</li>
															<li>
																<Link to={element.github} rel="noopener" target="_blank">
																	<FontAwesomeIcon icon={faCode}/>
																</Link>
															</li>
														</ul>
													</div>
													<img src={element.image} />
												</div>
												
												<div className="text text-2 pt-2 mt-3">
													<div className="category">
													{
														element.tags.map((tag, index) => (
															<span>{tag.name}</span>
														))
													}
													</div>													
									
													<h3 className="project-title">
														<Link to={element.liveLink} target="_blank">
														{element.name}
														</Link>
													</h3>
													<p className="project-desc">{element.description} </p>
												</div>
											</div>
										</Col>

									))
								}
							
						</Row>
					</Container>
				</section>
				<footer className="ftco-footer ftco-bg-dark ftco-section">
					<Container className="px-md-5">
						<Row>
							<div className="col-md-12">
								<div className="ftco-footer-widget">
									<h2 className="ftco-heading-2">Hire Me</h2>
									<div className="block-23 mb-3">
										<p> <span> <FontAwesomeIcon icon={faMapMarkerAlt}/></span><span> Plot 67B Bugoloobi, Kampala-Uganda</span></p>
										<p>  <span> <FontAwesomeIcon icon={faPhone}/></span><span> +256 773 047 940</span></p>
										<p>  <span> <FontAwesomeIcon icon={faEnvelope}/></span><span> olukadeno@gmail.com</span></p>
									</div>
								</div>
							</div>
						</Row>
						<Row>	          
							<Col md={24} className=" copyright text-center">
								<hr/>
								Copyright | Denis &copy; <span>{(new Date().getFullYear())}</span> 
							</Col>
						</Row>
				</Container>
				</footer>
		</>
		);
	}
}
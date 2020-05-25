import React from 'react';
import { Layout, Form, Input, Checkbox, Button, Row, Col, Typography, Divider } from "antd";
import 'antd/dist/antd.css';
import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Router, Link } from 'react-router-dom';

export default function ProjectsLayout() {

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
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="blog-entry ftco-animate">
								<div className="img img-2" style={{backgroundColor: '#7a39a0'}}>
									<div className="detail-overlay">
										<ul>
											<li>
                        <Link to="https://play.google.com/store/apps/details?id=com.premar.muvi" target="_blank">
                          <FontAwesomeIcon icon=" icon-eye"/>
                        </Link>
											  </li>
											  <li>
												<a href="https://github.com/OlukaDenis/Muvi"
												target="_blank"><i className="icon icon-code"></i
												></a>
											  </li>
										</ul>
									</div>
									<img src="https://www.studentbrands.co.za/wp-content/uploads/2017/01/Computer-course.jpeg" />
								</div>
								

								<div className="text text-2 pt-2 mt-3">
									<div className="category">
										<span><a href="#">Mobile</a></span>
										<span ><a href="#">Java</a></span>
										<span ><a href="#">Android</a></span>
										<span ><a href="#">Retrofit</a></span>
									</div>
									
					
									<h3 className="mb-4"><a href="https://play.google.com/store/apps/details?id=com.premar.muvi" target="blank">Muvi - The Movie Guide</a></h3>
									<p className="mb-4"> Android mobile app that displays detailed information on movies and TV shows. App based on The Movie Database API.</p>
								</div>
							</div>
						</div>
						{/* <div className="col-md-6">
							<div className="blog-entry ftco-animate">
                <div className="img img-2" style={{backgroundColor: 'rgb(45, 150, 92)'}}>
									<div className="detail-overlay">
										<ul>
											<li>
												<a href="https://muvi-web-forum.herokuapp.com/"
												target="_blank"><i className="icon icon-eye"></i
												></a>
											  </li>
											  <li>
												<a href="https://github.com/OlukaDenis/Muvi-Web-Forum"
												target="_blank"><i className="icon icon-code"></i
												></a>
											  </li>
										</ul>
									</div>
									<img src="images/muvi-web.png" />
								</div>								

								<div className="text text-2 pt-2 mt-3">
									<div className="category">
										<span><a href="#">Web</a></span>
										<span ><a href="#">Ruby</a></span>
										<span ><a href="#">SASS</a></span>
										<span ><a href="#">Rails</a></span>
										<span ><a href="#">Html</a></span>
									</div>
									<h3 className="mb-4"><a href="https://muvi-web-forum.herokuapp.com/" target="blank">Muvi Web Forum</a></h3>
									<p className="mb-4"> A web forum for the Muvi Android app with an intuitive UI design.</p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="blog-entry ftco-animate">
								<div className="img img-2" style={{backgroundColor: 'rgb(238, 90, 90)'}}>
									<div className="detail-overlay">
										<ul>
											<li>
												<a href="https://orgapp-tracker.herokuapp.com/"
												target="_blank"><i className="icon icon-eye"></i
												></a>
											  </li>
											  <li>
												<a href="https://github.com/OlukaDenis/Project--Tracker"
												target="_blank"><i className="icon icon-code"></i
												></a>
											  </li>
										</ul>
									</div>
									<img src="images/orgapp.png" />
								</div>								

								<div className="text text-2 pt-2 mt-3">
									<div className="category">
										<span><a href="#">Web</a></span>
										<span ><a href="#">Ruby</a></span>
										<span ><a href="#">Rails</a></span>
										<span ><a href="#">Html</a></span>
										<span ><a href="#">SASS</a></span>
									</div>
									<h3 className="mb-4"><a href="https://orgapp-tracker.herokuapp.com/" target="_blank">OrgApp Tracker</a></h3>
									<p className="mb-4">A web app that allows users to track the time spent on projects and grouping them.</p>
								</div>
							</div>
						</div> */}
						{/* <div className="col-md-6">
							<div className="blog-entry ftco-animate">
								<div className="img img-2" style={{backgroundColor: 'rgb(45, 82, 150)'}}>
									<div className="detail-overlay">
										<ul>
											<li>
												<a href="https://friendy-social.herokuapp.com/"
												target="_blank"><i className="icon icon-eye"></i
												></a>
											  </li>
											  <li>
												<a href="https://github.com/OlukaDenis/Muvi-Web-Forum"
												target="_blank"><i className="icon icon-code"></i
												></a>
											  </li>
										</ul>
									</div>
									<img src="images/friendy.png" />
								</div>								

								<div className="text text-2 pt-2 mt-3">
									<div className="category">
										<span><a href="#">Web</a></span>
										<span ><a href="#">Ruby</a></span>
										<span ><a href="#">SASS</a></span>
										<span ><a href="#">Rails</a></span>
										<span ><a href="#">Html</a></span>
									</div>
									<h3 className="mb-4"><a href="https://friendy-social.herokuapp.com/" target="blank">Friendy</a></h3>
									<p className="mb-4"> A web social platform that allows user to post their stories, send and receive friend requests, and comment on stories.</p>
								</div>
							</div>
						</div> */}
					</div>	
				</div>
	    </section>
	    <footer className="ftco-footer ftco-bg-dark ftco-section">
	      <div className="container px-md-5">
	        <div className="row">
	          <div className="col-md-12">
	            <div className="ftco-footer-widget">
	            	<h2 className="ftco-heading-2">Hire Me</h2>
	            	<div className="block-23 mb-3">
		              <ul>
		                <li><span className="icon icon-map-marker"></span><span className="text">Plot 67B Bugoloobi, Kampala-Uganda</span></li>
		                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+256 773 047 940</span></a></li>
		                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">olukadeno@gmail.com</span></a></li>
		              </ul>
		            </div>
	            </div>
	          </div>
	        </div>
	        <div className="row">
	          <div className="col-md-12 text-center">
	              Copyright | Denis &copy;
                <script>document.write(new Date().getFullYear());</script> 
	          </div>
	        </div>
	      </div>
	    </footer>
   </>
  );
}
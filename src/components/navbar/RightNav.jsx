import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import '../../scss/NavBar.scss';
import { NavLink } from 'react-router-dom';
import { analyticsEvent } from '../../utils/googleAnalytics';
import {
  openDrawer, closeDrawer,
} from '../../store/actions/index';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background: repeating-linear-gradient( -120deg, rgb(224, 224, 224) 5px, rgb(255, 255, 255) 8px, rgb(214, 213, 213) 5px, rgb(241, 241, 241) 6px);
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    padding-right: 1.5rem;
    z-index: 1;
    transition: transform 0.3s ease-in-out;

    li {
      margin: 0 0 15px 0;
      padding: 0;
      list-style: none;
      font-size: 18px;
      font-weight: 700;
      align-self: center;
    }

    a {
      color: rgba(0,0,0,.4);
      text-decoration: none;
      position: relative;
      padding: 10px 20px;
      font-family: 'Montserrat', sans-serif;
    }
  }
`;

const RightNav = () => {
  const drawerReducer = useSelector(state => state.drawerReducer);
  const { open } = drawerReducer;

  const dispatch = useDispatch();

  const handleClick = () => (open ? dispatch(closeDrawer()) : dispatch(openDrawer()));

  return (
    <>
      <Ul open={open}>
        <li><NavLink onClick={handleClick} exact to="/" activeClassName="nav-link--active" className="nav-link"> About </NavLink></li>
        <li><NavLink onClick={handleClick} exact to="/projects" activeClassName="nav-link--active" className="nav-link"> Projects </NavLink></li>
        {/* <li>
          <NavLink
            onClick={handleClick}
            exact
            to="/skills"
            activeClassName="nav-link--active"
            className="nav-link"
          >
            Skills
          </NavLink>
        </li> */}
        <li><NavLink onClick={handleClick} exact to="/blog" activeClassName="nav-link--active" className="nav-link"> Blog </NavLink></li>
        <li>
          <a
            href="https://docs.google.com/document/d/1gkeeAt9EburW4Lg5hFsrlz8cYgnSqcpyNeO2m1WfA7Y/edit?usp=sharing"
            className="btn btn-primary resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analyticsEvent('View my resume', 'Resume')}
          >
            Resume
          </a>
        </li>
        <li>
          <a
            href="mailto:olukadeno@gmail.com"
            className="btn btn-primary resume-btn"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => analyticsEvent('Send a hire me email', 'Hire me')}
          >
            Hire Me
          </a>
        </li>
      </Ul>
    </>
  );
};

export default RightNav;

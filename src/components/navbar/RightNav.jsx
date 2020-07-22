import React from 'react';
import styled from 'styled-components';
import '../../scss/NavBar.scss';
import {
  NavLink,
  HashRouter,
} from 'react-router-dom';

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

const RightNav = ({ open, handleClick }) => (
  <HashRouter>
    <Ul open={open}>
      <li onClick={handleClick}><NavLink exact to="/" className="nav-link"> About </NavLink></li>
      <li onClick={handleClick}><NavLink to="/projects" className="nav-link"> Projects </NavLink></li>
      <li onClick={handleClick}><NavLink to="/skills" className="nav-link"> Skills </NavLink></li>
      <li onClick={handleClick}><NavLink to="/blog" className="nav-link"> Blog </NavLink></li>
      <li onClick={handleClick}>
        <a
          href="https://docs.google.com/document/d/1VFzAuigGH8sAw9jthdutik0dYWDmfR3QE3-GFLnym8k/edit?usp=sharing"
          className="btn btn-primary resume-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </li>
      <li onClick={handleClick}>
        <a
          href="mailto:olukadeno@gmail.com"
          className="btn btn-primary resume-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hire Me
        </a>
      </li>
    </Ul>
  </HashRouter>
);

export default RightNav;

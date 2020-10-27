import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Burger from './Burger';

const Logo = styled.img`
  height: 100%;
  padding: 5px;
`;

const Nav = styled.nav`
  width: 100%;
  height: 70px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 555;
  background-color: #011426;
`;

const Navbar = () => (
  <Nav>
    <Link to="/">
      <Logo src="images/logo_light.png" alt="Denny Logo" />
    </Link>
    <Burger />
  </Nav>
);

export default Navbar;

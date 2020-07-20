import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Logo = styled.img`
  height: 60px;
  width: 80px;
  padding: 0;
  position: absolute;
`;

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #ddd;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 555;
  background-color: #011426;
`

const Navbar = () => {
  return (
    <Nav>
      <div>
        <Logo src="images/logo_light.png" alt="Denny Logo" />
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar

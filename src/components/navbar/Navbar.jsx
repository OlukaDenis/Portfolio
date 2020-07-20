import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

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

  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        Denis
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar

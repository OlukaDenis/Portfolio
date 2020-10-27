import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import RightNav from './RightNav';
import {
  openDrawer, closeDrawer,
} from '../../store/actions/index';

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 1000;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.11rem;
    background-color: ${({ open }) => (open ? '#001a33' : '#ccc')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const Burger = () => {
  const drawerReducer = useSelector(state => state.drawerReducer);
  const { open } = drawerReducer;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeDrawer());
  }, [closeDrawer]);

  const handleClick = () => (open ? dispatch(closeDrawer()) : dispatch(openDrawer()));

  return (
    <>
      <StyledBurger open={open} onClick={handleClick}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav />
    </>
  );
};

export default Burger;

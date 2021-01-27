import { AnimateSharedLayout } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationStyle = styled.nav`
  background: white;
  grid-column: 1 / 3;
  grid-row: 7 / 13;

  text-align: center;

  display: grid;
  gap: 0.5rem;

  grid-template-rows: repeat(5, 1fr);

  header  {
    h3 {
      font-size: 2rem;
    }
  }

  a {
    color: black;
    font-weight: bold;
    font-size: 1rem;
    text-decoration: none;
    padding: 1rem;
    border: 2px solid black;
    border-radius: 8px;
    transition: 200ms;
    place-self: center stretch;

    &:hover {
      background: black;
      color: white;
      transition: 200ms;
      transform: translateY(-3px);
    }

    &:active {
      background: white;
      color: black;
      transform: translateY(0);
    }
  }
`;

const Navigation = () => {
  return (
    <NavigationStyle>
      <header>
        <h3>Navigation</h3>
      </header>

      <NavLink to="/">{`home`.toUpperCase()}</NavLink>
      <NavLink to="/project">{'project'.toUpperCase()}</NavLink>
      <NavLink to="/about">{`about`.toUpperCase()}</NavLink>
      <NavLink to="/">home</NavLink>
    </NavigationStyle>
  );
};

export default Navigation;

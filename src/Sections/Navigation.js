import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import NavigationLinkButton from '../Components/Navigation/NavigationLinkButton';

const NavigationStyle = styled.section`
  padding: 0.5rem;
  background: ${(props) => (props.nightMode ? 'black' : 'white')};

  grid-column: 1 / 3;
  grid-row: 5 / 13;

  text-align: center;

  display: grid;
  gap: 0.5rem;

  grid-template-rows: 1fr 6fr;

  header  {
    h3 {
      font-size: 2rem;
    }
  }

  nav {
    display: grid;

    gap: 0.5rem;

    place-content: center stretch;

    a {
      color: black;
      font-weight: bold;
      font-size: 1.5rem;
      text-decoration: none;
      padding: 1rem;
      border: 2px solid black;
      border-radius: 8px;
    }
  }
`;

const Navigation = () => {
  return (
    <NavigationStyle>
      <header>
        <h3>Navigation</h3>
      </header>
      <nav>
        <NavLink to="/">home</NavLink>
        <NavLink to="/">home</NavLink>
        <NavLink to="/">home</NavLink>
        <NavLink to="/">home</NavLink>
      </nav>
    </NavigationStyle>
  );
};

export default Navigation;

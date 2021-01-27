import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../Assets/logo.svg';

const HeaderStyle = styled.header`
  grid-column: 1 / 3;
  grid-row: 1 / 6;
  background: ${(props) => (props.nightMode ? 'black' : 'white')};
  display: grid;

  svg {
    height: 80%;
    width: 80%;
    animation: rotation 10s infinite linear;
    fill: ${(props) => (props.nightMode ? 'white' : 'black')};
    cursor: pointer;
    place-self: center;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
    </HeaderStyle>
  );
};

export default Header;

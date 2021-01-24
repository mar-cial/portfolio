import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from '../Assets/logo.svg';

const HeaderStyle = styled.header`
  grid-column: 1 / 3;
  grid-row: 1 / 4;
  background: ${(props) => (props.nightMode ? 'black' : 'white')};

  svg {
    height: 100%;
    width: 100%;
    animation: rotation 10s infinite linear;
    fill: ${(props) => (props.nightMode ? 'white' : 'black')};
    cursor: pointer;
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

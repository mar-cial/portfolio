import React from 'react';
import styled from 'styled-components';

const MainStyle = styled.main`
  border-left: 2px solid black;
  border-radius: 0 8px 8px 0;
  padding-left: 2vh;
  grid-column: 3 / -1;
  grid-row: 1 / -1;
`;

const Main = (props) => {
  return <MainStyle>{props.children}</MainStyle>;
};

export default Main;

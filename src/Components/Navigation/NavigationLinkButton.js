import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavigationLinkButtonStyle = styled(NavLink)`
  font-size: 2rem;
  font-weight: bold;
  border-radius: 8px;
  text-decoration: none;
  color: black;
`;

const NavigationLinkButton = (props) => {
  return (
    <NavigationLinkButtonStyle to={props.toPath} exact={props.exact}>
      {props.text}
    </NavigationLinkButtonStyle>
  );
};

export default NavigationLinkButton;

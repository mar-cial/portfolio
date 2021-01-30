import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const ProjectCardStyle = styled.article`
  padding: 2vh;
  background: white;
  border-radius: 8px;
  display: grid;
  grid-template-rows: 3fr 1fr;
  border: 2px solid black;

  header {
    h3 {
      font-size: 2.3rem;
    }
  }

  a {
    display: flex;
    background: black;
    color: white;
    height: 100%;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    border-radius: 8px;
    font-weight: bold;
    text-decoration: none;
    transition: 200ms;
    font-size: 1.2rem;

    &:hover {
      background: white;
      color: black;
      transform: translateY(-3px);
      transition: 200ms;
    }

    &:active {
      background: black;
      color: black;
      transform: translateY(0);
      color: white;
    }
  }
`;
const ProjectCard = (props) => {
  return (
    <ProjectCardStyle>
      <header>
        <h3>{props.title}</h3>
        <p>{props.subtitle}</p>
      </header>

      <div>
        <a href={props.toUrl}>{`Go to ${props.title}`}</a>
      </div>
    </ProjectCardStyle>
  );
};

export default ProjectCard;

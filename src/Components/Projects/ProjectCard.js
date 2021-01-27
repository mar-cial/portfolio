import React from 'react';
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

  div {
    background: white;
    border: 2px solid black;
    display: flex;
    align-items: center;
    border-radius: 8px;
    justify-content: center;
    cursor: pointer;
    transition: 200ms;
    &:hover {
      background: black;
      color: white;
      transition: 200ms;
      transform: translateY(-5px);
    }
    &:active {
      background: white;
      color: black;
      transform: translateY(0);
    }

    span {
      font-weight: bolder;
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
        <span>{`Go to ${props.title}`}</span>
      </div>
    </ProjectCardStyle>
  );
};

export default ProjectCard;

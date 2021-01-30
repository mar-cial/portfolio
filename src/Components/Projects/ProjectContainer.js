import React from 'react';
import styled from 'styled-components';
import ProjectCard from './ProjectCard';

const ProjectContainerSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr 5fr;
  gap: 0.5rem;

  h2 {
    grid-column: span 3;
    font-size: 2rem;
  }
`;

const ProjectContainer = () => {
  return (
    <ProjectContainerSection>
      <h2>Check out my projects below</h2>
      <ProjectCard
        title="Pockett Transfers"
        subtitle="Currency transfer app. Made with React, styling completely custom with styled-components, Firebase authentication and a few API calls for development only."
        toUrl="https://mar-cial.github.io/pocketts"
      />

      <ProjectCard
        title="Shopping Web App"
        subtitle="Web application for shopping online. Made with TypeScript and React."
        toUrl="https://mar-cial.github.io/ecommerce-site"
      />
      <ProjectCard
        title="Landing page generator"
        subtitle="A generic landing page, completely responsive. Don't worry about style, just fill out the content and you're ready to go. PENDING"
        toUrl="#"
      />
    </ProjectContainerSection>
  );
};

export default ProjectContainer;

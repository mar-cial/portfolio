import React from 'react';
import styled from 'styled-components';
import ProjectContainer from '../Components/Projects/ProjectContainer';

const HomeStyle = styled.section`
  display: grid;
  grid-template-rows: 2fr 3fr;
  height: 100%;

  header {
    h1 {
      font-size: 3rem;
      font-weight: bold;
    }

    p {
      padding-top: 2rem;
    }
  }
`;

const Home = () => {
  return (
    <HomeStyle>
      <header>
        <h1>
          Hey there.
          <br />
          My name is Mario César and I am a <br />
          software developer. Mostly web.
        </h1>
        <p>
          I like building stuff with React, especially dashboards. Currently
          learning TypeScript, React Native and Golang.
        </p>
      </header>
      <ProjectContainer />
    </HomeStyle>
  );
};

export default Home;

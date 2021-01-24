import React from 'react';
import styled from 'styled-components';

const HomeStyle = styled.section`
  padding: 2vh;
  header {
    h1 {
      font-size: 3rem;
      font-weight: bold;
    }

    p {
      line-height: 4;
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
          web developer.
        </h1>
        <p>
          I do everything with ReactJs ans Node. Currently learning TypeScript,
          React Native and Golang.
        </p>
      </header>

      <h2>
        Check out some of my projects below. Click them for a detailed view.
      </h2>
    </HomeStyle>
  );
};

export default Home;

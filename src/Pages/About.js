import React from 'react';
import styled from 'styled-components';

const AboutStyle = styled.section`
  header {
    h1 {
      font-size: 3rem;
      font-weight: bold;
    }

    p {
      padding-top: 2rem;
    }
  }

  ul {
    padding-top: 1rem;
    padding-left: 2rem;
  }
`;

const About = () => {
  return (
    <AboutStyle>
      <header>
        <h1>About me.</h1>
        <p>
          I am a software developer from Mexicali, Baja California, México. I
          like web applications for their versatility, and native applications
          for their performance. I started working with html, css and then
          javascript.
        </p>
        <p>
          My favorite types of projects are dashboards. Making the user
          experience as seamless as possible is my main goal as a developer, and
          dashboards are a great way of achieving it. I think that every
          application should aim to achieve the goal it was designed for, and I
          like to keep the in mind during the design process.
        </p>
        <p>
          I use a lot of html and css in the virtual DOM of React. I haven't
          used raw css in a while, instead opting for styled-components and
          scss. I think it is way more mantainable to have the css dedicated
          exclusively to every component instead of a separate file. Long
          selectors are unreadable! But that's just my opinion.
          <br />
          Css grid and flexbox are necessary to make dashboards work, and I am
          constantly trying to get better at them. My main focus is to make code
          as modular as possible, which is the whole point of React. Javascript
          is my main skill, and prefer to use es6+ in every project. I think I'd
          go out of my way to refactor things into es6 if possible.
        </p>
        <p>
          <h3>
            <b>
              Tl;dr: I like dashboards and building websites. These are the main
              technologies I use:
            </b>
          </h3>
          <ul>
            <li>HTML</li>
            <li>CSS/css-in-js/SCSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>TypeScript</li>
            <li>React Native</li>
          </ul>
          <p>
            Including a bunch of tools that make life easier. Thank you for
            reading!
          </p>
        </p>
      </header>
    </AboutStyle>
  );
};

export default About;

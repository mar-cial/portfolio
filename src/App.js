import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Sections
import Header from './Sections/Header';
import Main from './Sections/Main';
import Navigation from './Sections/Navigation';

// Pages
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

// App start
const App = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Main>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Main>
    </>
  );
};

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Sections/Header';
import Main from './Sections/Main';
import Navigation from './Sections/Navigation';
import Home from './Pages/Home';

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
        </Switch>
      </Main>
    </>
  );
};

export default App;

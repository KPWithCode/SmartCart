import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Switch } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';

const App = () => {
  return (
      <BrowserRouter>
        <Router>
        <Navbar />
          <Switch>
          </Switch>
        </Router>
      </BrowserRouter>
  );
}

export default App;

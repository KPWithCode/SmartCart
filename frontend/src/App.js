import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import Navbar from './components/Nav/Navbar';

const App = () => {
  return (
      <BrowserRouter>
        <Router>
        <Navbar />
          <Switch>
          <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </BrowserRouter>
  );
}

export default App;

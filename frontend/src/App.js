import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import Shop from './pages/Shop';
import Navbar from './components/Nav/Navbar';

const App = () => {
  return (
      <BrowserRouter>
        <Router>
        <Navbar />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          </Switch>
        </Router>
      </BrowserRouter>
  );
}

export default App;

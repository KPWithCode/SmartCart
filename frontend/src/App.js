import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Navbar from './components/Nav/Navbar';
import { AnimatePresence } from 'framer-motion';

const App = () => {

  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;

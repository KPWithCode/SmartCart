import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom'
import Home from './pages/home/home';
import Shop from './pages/Shop/Shop';
import Navbar from './components/nav/navbar';
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

import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Route path="/" component={Home} exact/>
      <Route path="/about" component={About}/>
    </div>
  );
};

export default App;
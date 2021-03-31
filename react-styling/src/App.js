import React, { Component } from 'react';
import './App.css';
// import SassComponent from './SassComponent.jsx';
// import CSSModule from './CSSModule.jsx';
import StyledComponent from './StyledComponent.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <StyledComponent/>
      </div>
    );
  }
};

export default App;
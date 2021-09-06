import React from 'react';
import './App.css';
import Calculator from './Calculator';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <main>
          <Calculator />
        </main>
      </div>
    );
  }
}

export default App;

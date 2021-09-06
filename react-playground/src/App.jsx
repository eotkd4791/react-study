import React from 'react';
import './App.css';
import Reservation from './Reservation';

class App extends React.Component {
  constructor(prop) {
    super(prop);
  }
  render() {
    return (
      <div className='App'>
        <main>
          <Reservation />
        </main>
      </div>
    );
  }
}

export default App;

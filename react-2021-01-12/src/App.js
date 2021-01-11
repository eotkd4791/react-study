import React, { Component } from 'react';
// import ValidationSample from './ValidationSample.js';
import ScrollBox from './ScrollBox.js';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨밑으로
        </button>
      </div>
    );
  }
}

export default App;

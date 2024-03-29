import React from 'react';
import ReactDOM from 'react-dom';

function Tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleDateString()}.</h2>
    </div>
  );

  ReactDOM.render(element, document.getElementById('root'));
}
setInterval(Tick, 1000);

export default Tick;
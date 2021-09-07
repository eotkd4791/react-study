import React from 'react';
import './App.css';
import Dialog from './Dialog';

function Contacts() {
  return <div className='Contact'>Contact</div>;
}

function Chat() {
  return <div className='Chat'>Chat</div>;
}

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <main>
          <Dialog left={<Contacts />} right={<Chat />} />
        </main>
      </div>
    );
  }
}

export default App;

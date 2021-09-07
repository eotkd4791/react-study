import React from 'react';
import './App.css';
import FilterableProductTable from './FilterableProductTable';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <main>
          <FilterableProductTable />
        </main>
      </div>
    );
  }
}

export default App;

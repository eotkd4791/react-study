import React from 'react';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { productInfo: [], searchKeyword: '', showOnlyInStock: false };
  }

  render() {
    const { searchKeyword, showOnlyInStock, onChange } = this.props;

    return (
      <div className='SearchBar'>
        <div className='SearchBar__input-wrapper'>
          <input type='text' placeholder='Search...' name='searchKeyword' value={searchKeyword} onChange={onChange} />
        </div>
        <input
          type='checkbox'
          id='SearchBarCheckbox'
          name='showOnlyInStock'
          checked={showOnlyInStock}
          onChange={onChange}
        />
        <label htmlFor='SearchBarCheckbox'>Only show products in stock</label>
      </div>
    );
  }
}

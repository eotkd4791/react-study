import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = { searchKeyword: '', showOnlyInStock: false };
  }

  onChange({ target: { type, name, value, checked } }) {
    const payload = type === 'checkbox' ? checked : value;

    this.setState({ [name]: payload });
  }

  render() {
    const { searchKeyword, showOnlyInStock } = this.state;

    return (
      <div className='FilterableProductTable'>
        <SearchBar searchKeyword={searchKeyword} showOnlyInStock={showOnlyInStock} onChange={this.onChange} />
        <ProductTable searchKeyword={searchKeyword} />
      </div>
    );
  }
}

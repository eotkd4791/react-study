import React, { Component } from 'react';
import ProductRow from './ProductRow';

export default class ProductCategoryRow extends Component {
  render() {
    const { searchKeyword } = this.props;

    return (
      <>
        <tr className='ProductCategoryRow'>
          <th colSpan='2'>{this.props.category}</th>
        </tr>
        {this.props.products.map((product, index) => (
          <ProductRow key={index} product={product} searchKeyword={searchKeyword} />
        ))}
      </>
    );
  }
}

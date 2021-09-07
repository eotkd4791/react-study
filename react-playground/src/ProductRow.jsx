import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    const {
      searchKeyword,
      product: { name, price, stocked },
    } = this.props;

    return (
      new RegExp(searchKeyword, 'ig').test(name) && (
        <tr className='ProductRow'>
          <td colSpan='2' style={{ color: stocked || 'red' }}>
            {name}
          </td>
          <td>{price}</td>
        </tr>
      )
    );
  }
}

import React, { Component } from 'react';

export default class ProductRow extends Component {
  isMatchedToKeyword(name) {
    const { searchKeyword } = this.props;
    return new RegExp(searchKeyword, 'ig').test(name);
  }

  render() {
    const {
      showOnlyInStock,
      product: { name, price, stocked },
    } = this.props;

    return (
      (showOnlyInStock ? stocked === showOnlyInStock : true) &&
      this.isMatchedToKeyword(name) && (
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

import React, { Component } from 'react';

export default class ProductTableHeader extends Component {
  render() {
    return <thead className='ProductTableHeader'>{this.props.children}</thead>;
  }
}

import React, { Component } from 'react';
import ProductCategoryRow from './ProductCategoryRow';

export default class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = { productInfo: [], categories: [] };
  }

  componentDidMount() {
    this.fetchProductData();
  }

  async handleSuccess(response) {
    const data = await response.json();
    this.setState({ productInfo: data });
    this.categorizeProducts();
  }

  handleFailure({ statusText, text }) {
    throw new Error(`${statusText}, ${text}`);
  }

  async fetchProductData() {
    try {
      const response = await fetch('/data.json', { method: 'GET' });
      response.ok ? this.handleSuccess(response) : this.handleFailure(response);
    } catch (error) {
      this.setState({ productInfo: [{ category: 'None', price: '0', stocked: false, name: 'Nothing' }] });
    }
  }

  categorizeProducts() {
    const categories = {};
    this.state.productInfo.forEach(({ category, name, price, stocked }) => {
      const product = { name, price, stocked };
      category in categories ? categories[category].push(product) : (categories[category] = [product]);
    });

    this.setState({ categories });
  }

  render() {
    const { categories } = this.state;
    const { searchKeyword, showOnlyInStock } = this.props;

    return (
      <table className='ProductTable'>
        <thead>
          <tr>
            <th colSpan='2'>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(categories).map((category, index) => (
            <ProductCategoryRow
              category={category}
              key={index}
              products={categories[category]}
              searchKeyword={searchKeyword}
              showOnlyInStock={showOnlyInStock}
            />
          ))}
        </tbody>
      </table>
    );
  }
}

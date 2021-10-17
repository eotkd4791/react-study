import React from 'react';

const Products = ({ name, imagePath }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={`http://localhost:5000/${imagePath}`}
        style={{ width: '75%' }}
        alt={`${name} product`}
      />

      <form style={{ marginTop: '10px' }}>
        <label style={{ textAlign: 'right' }}>{name}</label>
        <input
          type="number"
          style={{ marginLeft: 7 }}
          min="0"
          name="quantity"
          defaultValue={0}
        />
      </form>
    </div>
  );
};

export default Products;

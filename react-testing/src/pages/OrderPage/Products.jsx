import React from 'react';

const Products = ({ name, imagePath, updateItemCounts }) => {
  const handleChange = (event) => {
    const currentValue = event.target.value;
    updateItemCounts(name, currentValue);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <img
        src={`http://localhost:5000/${imagePath}`}
        style={{ width: '75%' }}
        alt={`${name} product`}
      />

      <form style={{ marginTop: '10px' }}>
        <label htmlFor={name} style={{ textAlign: 'right' }}>
          {name}
        </label>
        <input
          id={name}
          type="number"
          style={{ marginLeft: 7 }}
          min="0"
          name="quantity"
          defaultValue={0}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Products;

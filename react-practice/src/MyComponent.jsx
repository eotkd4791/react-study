import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => {
  return (
    <div>
      나는 {name}. <br />
      children = {children} 좋아하는 숫자는 {favoriteNumber}
    </div>
  );
};

export default MyComponent;
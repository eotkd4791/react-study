import React from 'react';
import propTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber}) => {
  return (
    <>
      <div>나는 {name}를 공부중이다.</div>
      <div>리액트</div>
      <div>{favoriteNumber}</div>
    </>
  );
}


// MyComponent.defaultProps = {
//   name: 'default nameee'
// };

MyComponent.propTypes = {
  name: (propTypes.string || propTypes.object).isRequired,
  favoriteNumber: propTypes.number.isRequired
};

export default MyComponent;

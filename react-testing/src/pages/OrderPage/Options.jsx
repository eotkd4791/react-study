import React from 'react';

const Options = ({ name }) => {
  return (
    <div>
      <form>
        <input type="checkbox" id={`${name} option`} />{' '}
        <label htmlFor={`${name} option`}></label>
      </form>
    </div>
  );
};

export default Options;

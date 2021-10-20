import React from 'react';

const Options = ({ name, updateItemCounts }) => {
  return (
    <div>
      <form>
        <input
          type="checkbox"
          id={`${name} option`}
          onChange={(event) => {
            updateItemCounts(name, event.target.checked ? 1 : 0);
          }}
        />
        <label htmlFor={`${name} option`}>{name}</label>
      </form>
    </div>
  );
};

export default Options;

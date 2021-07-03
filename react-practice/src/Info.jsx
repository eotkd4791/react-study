import React, { useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: '', nickname: '' });
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  }

  return (
    <div>
      <div>
        <input type="text" name="name" onChange={onChange} value={name} />
        <input type="text" name="nickname" onChange={onChange} value={nickname} />
      </div>
      <div>
        <div>이름: {name}</div>
        <div>닉네임: {nickname}</div>
      </div>
    </div>
  );
};

export default Info;
import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import styled from 'styled-components';
// import cn from 'classnames';
// import './TodoListItem.scss';

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  &:nth-child(even) {
    background-color: #f8f9fa;
  }
  & + & {
    border-top: 1px solid #dee2e6;
  }
`;

const CheckBox = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
  svg {
    font-size: 1.5rem;
  }
  .text {
    margin-left: 0.5rem;
    flex: 1;
  }
  &.checked {
    svg {
      color: #22b8cf;
    }
    .text {
      color: #adb5bd;
      text-decoration: line-through;
    }
  }
`;

const RemoveButton = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #ff6b6b;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
`;


const TodoListItem = ({ todo, onRemove, onToggle, style }) => {
  const { id, text, checked } = todo;
  return (
    <TodoListItemWrapper>
      <CheckBox 
        className={`checkbox${checked ? ' checked' : ''}`} 
        onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
        <div className="text">{text}</div>
      </CheckBox>
      {/* <div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
        {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
        <div className="text">{text}</div>
      </div> */}
      <RemoveButton onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline/>
      </RemoveButton>
    </TodoListItemWrapper>
  )
};

export default TodoListItem;
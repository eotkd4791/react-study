import React from 'react';
import TodoListItem from './TodoListItem';
import styled from 'styled-components';
// import './TodoList.scss';

const TodoContainer = styled.div`
  min-height: 320px;
  max-height: 513px;
  overflow-y: auto;
`;

const TodoList = ({ todos, onRemove, onToggle }) => {
  return (
  <TodoContainer>
      {todos.map(todo => (
        <TodoListItem 
          todo={todo} 
          key={todo.id} 
          onRemove={onRemove} 
          onToggle={onToggle}
        />
      ))}
    </TodoContainer>
  );
};

export default TodoList;
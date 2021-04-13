import React from 'react';
import styled from 'styled-components';
// import './TodoTemplate.scss';

const TodoTemplateContainer = styled.div`
  width: 512px;
  margin: 6rem auto 0;
  border-radius: 4px;
  overflow: hidden;
`;

const AppTitle = styled.div`
  background-color: #22b8cf;
  color: #fff;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background-color: #fff;
`;

const TodoTemplate = ({ children }) => {
  return (
    <TodoTemplateContainer>
      <AppTitle>일정 관리</AppTitle>
      <Content>{children}</Content>
    </TodoTemplateContainer>
  );
};

export default TodoTemplate;

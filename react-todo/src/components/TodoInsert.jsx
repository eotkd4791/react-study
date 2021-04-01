import React, {useState, useCallback} from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
// import 'TodoInsert.scss';

const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: #fff;
  flex: 1;
  &:placeholder {
    color: #dee2e6;
  }
`;

const Button = styled.button`
  background: none;
  outline: none;
  border: none;
  background: #868e96;
  color: #fff;
  padding: 0.7rem 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 1ms background ease-in;
  &:hover {
    background: #adb5bd;
  }
`;

const Form = styled.form`
  display: flex;
  background-color: #495057;
`;

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );

  return (
    <Form>
      <Input 
        placeholder="할 일을 입력하세요."
        value={value}
        onChange={onChange}
      />
      <Button type="submit">
        <MdAdd/>
      </Button>
    </Form>
  )
};

export default TodoInsert;
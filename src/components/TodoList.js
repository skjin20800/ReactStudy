import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;

function TodoList() {  
  const initialTodos1 = useSelector((store) => store);
  return (
    <TodoListBlock>
      {initialTodos1.map(initialTodo => (
        <TodoItem
          key={initialTodo.id}
          id={initialTodo.id}
          text={initialTodo.text}
          done={initialTodo.done}
        />
      ))}
    </TodoListBlock>
  );
}

export default TodoList;
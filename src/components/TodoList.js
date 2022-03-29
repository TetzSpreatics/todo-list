import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-x: auto;
  background: rgba(43, 63, 107, 1);
  border-radius: 0 0 16px 16px;
  font-weight: bold;
`;

function TodoList() {
  return (
    <TodoListBlock>
      <TodoItem text="Add function for Todo-List" done={true} />
      <TodoItem text="컴포넌트 스타일링 하기" done={true} />
      <TodoItem text="Context 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} />
    </TodoListBlock>
  );
}

export default TodoList;

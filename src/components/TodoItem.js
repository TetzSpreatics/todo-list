import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
  display: none;
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 20px;
  border: 3px solid white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 3px solid #f76e11;
      color: #f76e11;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: white;
  ${(props) =>
    props.done &&
    css`
      color: #f76e11;
      text-decoration: line-through;
    `}
`;

function TodoItem({ done, text }) {
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done ? <MdDone /> : <></>}</CheckCircle>
      {/* <CheckCircle done={done}>{done && <MdDone />}</CheckCircle> */}
      <Text done={done}>{text}</Text>
      <Remove>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}

export default TodoItem;

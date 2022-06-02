import React from "react";
import styled from "styled-components";
import { useTodoState } from "../TodoContext";

const TodoHeadBlock = styled.div`
  padding: 20px 30px 30px 30px;
  border-bottom: 3px solid #ffffff;
  h1 {
    margin: 0px;
    font-size: 40px;
  }
  .day {
    margin-top: 4px;
    color: #ffffff;
    font-weight: bold;
    font-size: 20px;
  }
  .tasks-left {
    color: #ffffff;
    font-size: 20px;
    margin-top: 40px;
    font-weight: bold;
    background-color: rgba(17, 157, 167, 1);
    padding: 8px 10px;
    border-radius: 10px;
  }
`;

function TodoHead() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth();
  let date = now.getDate();
  let dateStr = year + "년 " + month + "월 " + date + "일";

  let day = now.getDay();
  let dayStr = getDay(day);

  const todos = useTodoState();
  console.log(todos);

  return (
    <TodoHeadBlock>
      <h1>{dateStr}</h1>
      <div className="day">{dayStr}</div>
      <div className="tasks-left">할 일 2개 남음</div>
    </TodoHeadBlock>
  );
}

function getDay(num) {
  if (num === 0) {
    return "일요일";
  } else if (num === 1) {
    return "월요일";
  } else if (num === 2) {
    return "화요일";
  } else if (num === 3) {
    return "수요일";
  } else if (num === 4) {
    return "목요일";
  } else if (num === 5) {
    return "금요일";
  } else if (num === 6) {
    return "토요일";
  } else {
    return "예상하지 못한 날짜 데이터가 입력 되었습니다.";
  }
}

export default TodoHead;

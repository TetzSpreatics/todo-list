import React from "react";
import styled from "styled-components";

const Thing = styled.div`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: green; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: orange; // <Thing> next to <Thing>
  }

  &.something {
    background: aqua; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

function Test() {
  return (
    <React.Fragment>
      <Thing>기본</Thing>
      <Thing>& + & / 같은 자식 요소로서 바로 다음에 있는 Thing 선택</Thing>
      <Thing className="something">
        &.something / 같은 자식 요소 중 클래스 이름이 something 인 Thing 선택
      </Thing>
      <div>Thing 컴포넌트가 아닌 일반 div라 아무런 스타일이 적용 안된 모습</div>
      <Thing>
        & ~ & / 같은 자식 요소지만 바로 다음에 있는 요소가 아닌 그 다음의 Thing
        선택
      </Thing>
      <div className="something-else">
        <Thing>
          .something-else & / something-else 라는 클래스의 자식 요소인 Thing
          선택
        </Thing>
      </div>
    </React.Fragment>
  );
}

export default Test;

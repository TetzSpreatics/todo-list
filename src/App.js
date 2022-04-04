import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TotoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import Test from "./components/Test";

const GlobalStyle = createGlobalStyle`
  body {
    background: #E6D5B8;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </>
  );
}

// function App() {
//   return (
//     <>
//       <Test />
//     </>
//   );
// }

export default App;

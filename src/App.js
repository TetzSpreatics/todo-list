import React from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TotoHead";
import TodoList from "./components/TodoList";

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
      </TodoTemplate>
    </>
  );
}

export default App;

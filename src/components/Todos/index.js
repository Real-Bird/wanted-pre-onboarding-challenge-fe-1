import React from "react";
import styled from "styled-components";
import TodoList from "./TodoList";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodosHome = ({ token }) => {
  return (
    <Container>
      <h1>Todo List</h1>
      <TodoList token={token} />
    </Container>
  );
};

export default TodosHome;

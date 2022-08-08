import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) navigate("/");
  }, [token]);
  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <Container>
      <h1>Todo List</h1>
      <TodoList token={token} />
      <button onClick={onLogout}>Log out</button>
    </Container>
  );
};

export default TodosHome;

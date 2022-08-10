import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getTodos } from "../libs/todos";
import TodoList from "./TodoList";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export interface Token {
  token: string;
}

export interface TodosResponse {
  [key: string]: string;
}

const TodosHome = ({ token }: Token) => {
  const [logout, setLogout] = useState(false);
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<TodosResponse[]>([]);
  useEffect(() => {
    if (token) {
      const res = getTodos(token);
      res.then((response) => setTodoList(response));
    }
  }, [todoList, token, navigate]);
  useEffect(() => {
    if (logout) navigate("/login");
  }, [logout]);
  const onLogout = () => {
    if (window.confirm("로그아웃하시겠습니까?")) {
      localStorage.removeItem("token");
      setLogout(true);
    }
  };
  return (
    <Container>
      <h1>Todo List</h1>
      <TodoList token={token} todoList={todoList} />
      <button onClick={onLogout}>Log out</button>
    </Container>
  );
};

export default TodosHome;

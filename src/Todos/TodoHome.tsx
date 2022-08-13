import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Container,
  Header,
  Overview,
  Title,
  ValidBtn,
} from "../components/todosStyled";
import { getTodos } from "../libs/todos";
import { getToken } from "../libs/users";
import TodoDetail from "./TodoDetail";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";

export interface Token {
  token: string;
}

export interface TodosResponse {
  content: string;
  createdAt: string;
  id: string;
  title: string;
  updatedAt: string;
}

const TodosHome = () => {
  const [logout, setLogout] = useState(false);
  const [token, setToken] = useState<string>("");
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<TodosResponse[]>([]);
  useEffect(() => {
    setToken(getToken("token"));
  }, []);
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
      <Overview>
        <Title>Todo List</Title>
        <TodoList token={token} todoList={todoList} />
        <TodoInsert token={token} />
        <ValidBtn onClick={onLogout}>Log out</ValidBtn>
      </Overview>
      <Overview>
        <Title>Todo Detail</Title>
        <Routes>
          <Route path=":id" element={<TodoDetail token={token} />} />
        </Routes>
      </Overview>
    </Container>
  );
};

export default TodosHome;

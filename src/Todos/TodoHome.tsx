import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  Container,
  Title,
  ToDoDetailOverview,
  ToDoListOverview,
  ValidBtn,
} from "../components/todosStyled";
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
  const navigate = useNavigate();
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
      <ToDoListOverview>
        <Title>Todo List</Title>
        <TodoList />
        <TodoInsert />
        <ValidBtn onClick={onLogout}>Log out</ValidBtn>
      </ToDoListOverview>
      <ToDoDetailOverview>
        <Title>Todo Detail</Title>
        <Routes>
          <Route path=":id" element={<TodoDetail />} />
        </Routes>
      </ToDoDetailOverview>
    </Container>
  );
};

export default TodosHome;

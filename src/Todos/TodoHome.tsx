import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import {
  ConfirmOverview,
  Container,
  Title,
  ToDoAlertBox,
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
  const [toggleLogout, setToggleLogout] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (logout) navigate("/login");
  }, [logout]);
  const onToggleLogout = () => {
    setToggleLogout(true);
  };
  const onLogout = () => {
    localStorage.removeItem("token");
    setLogout(true);
  };
  return (
    <Container>
      <ToDoListOverview>
        <Title>Todo List</Title>
        <TodoList />
        <TodoInsert />
        <ValidBtn onClick={onToggleLogout}>Log out</ValidBtn>
      </ToDoListOverview>
      <ToDoDetailOverview>
        <Title>Todo Detail</Title>
        <Routes>
          <Route path=":id" element={<TodoDetail />} />
        </Routes>
      </ToDoDetailOverview>
      {toggleLogout && (
        <ConfirmOverview>
          <ToDoAlertBox>
            <span>로그아웃 하시겠습니까?</span>
            <div>
              <button onClick={onLogout}>O</button>
              <button onClick={() => setToggleLogout(false)}>X</button>
            </div>
          </ToDoAlertBox>
        </ConfirmOverview>
      )}
    </Container>
  );
};

export default TodosHome;

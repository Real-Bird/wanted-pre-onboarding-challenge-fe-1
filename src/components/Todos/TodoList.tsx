import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TodoInsert from "./TodoInsert";
import TodoItem from "./TodoItem";

const TodoList = ({ token }) => {
  const [todoList, setTodoList] = useState([]);
  useEffect(() => {
    getTodos();
  }, [token, todoList]);

  const getTodos = async () => {
    const { data } = await (
      await fetch(`http://localhost:8080/todos`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
      })
    ).json();
    setTodoList(data);
  };
  return (
    <div className="TodoList">
      {todoList?.map((todo, idx) => (
        <div key={idx}>
          <TodoItem todo={todo} />
        </div>
      ))}
      <TodoInsert token={token} />
    </div>
  );
};

export default TodoList;

import React from "react";
import { TodosResponse, Token } from "./TodoHome";
import TodoInsert from "./TodoInsert";
import TodoItem from "./TodoItem";

interface TodoListWithToken extends Token {
  todoList: TodosResponse[];
}

const TodoList = ({ token, todoList }: TodoListWithToken) => {
  return (
    <div className="TodoList">
      {todoList &&
        todoList?.map((todo, idx) => (
          <div key={idx}>
            <TodoItem todo={todo} />
          </div>
        ))}
      <TodoInsert token={token} />
    </div>
  );
};

export default TodoList;

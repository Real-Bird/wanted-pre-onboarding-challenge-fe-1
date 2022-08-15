import { useQuery } from "@tanstack/react-query";
import { Link, useMatch } from "react-router-dom";
import {
  TodoItem,
  TodoItemWrapper,
  TodoListWrapper,
} from "../components/todosStyled";
import { getTodosQuery } from "../libs/todos";
import { TodosResponse } from "./TodoHome";

interface ITodoRes {
  [key: string]: TodosResponse[];
}

const TodoList = () => {
  const todoIdMatch = useMatch("/todo/:id");
  const { isLoading, data: toDoList } = useQuery<ITodoRes>(
    ["toDos"],
    getTodosQuery
  );
  return (
    <TodoListWrapper>
      <TodoItemWrapper>
        {isLoading
          ? null
          : toDoList?.data.map((todo, idx) => (
              <TodoItem
                key={idx}
                isSelect={
                  todoIdMatch !== null && todoIdMatch.params.id === todo.id
                }
              >
                <Link to={`${todo.id}`}>{todo.title}</Link>
              </TodoItem>
            ))}
      </TodoItemWrapper>
    </TodoListWrapper>
  );
};

export default TodoList;

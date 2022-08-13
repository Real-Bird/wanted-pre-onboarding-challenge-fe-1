import { Link, useMatch } from "react-router-dom";
import {
  TodoItem,
  TodoItemWrapper,
  TodoListWrapper,
} from "../components/todosStyled";
import { TodosResponse, Token } from "./TodoHome";

interface TodoListWithToken extends Token {
  todoList: TodosResponse[];
}

const TodoList = ({ todoList }: TodoListWithToken) => {
  const todoIdMatch = useMatch("/todo/:id");
  return (
    <TodoListWrapper>
      <TodoItemWrapper>
        {todoList &&
          todoList?.map((todo, idx) => (
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

import styled from "styled-components";
import { Link } from "react-router-dom";
import { TodosResponse } from "./TodoHome";

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

interface TodoItemProps {
  todo: TodosResponse;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { id, title } = todo;
  return (
    <ItemWrapper>
      <Link to={`/todo/${id}`}>
        <div className="text">{title}</div>
      </Link>
    </ItemWrapper>
  );
};

export default TodoItem;

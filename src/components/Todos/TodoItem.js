import styled from "styled-components";
import { Link } from "react-router-dom";

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TodoItem = ({ todo }) => {
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

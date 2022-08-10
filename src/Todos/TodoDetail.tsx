import styled from "styled-components";
import { useMatch, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TodoForm } from "./TodoInsert";
import { deleteTodo, getTodoById, updateTodo } from "../libs/todos";
import { Token } from "./TodoHome";

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const ValidBtn = styled.button`
  width: 120px;
  height: 40px;
  margin: 10px auto;
`;

const Label = styled.label`
  font-size: 32px;
`;

interface TodoResponse {
  [key: string]: string;
}

const TodoDetail = ({ token }: Token) => {
  const navigate = useNavigate();
  const [todoDetail, setTodoDetail] = useState<TodoResponse>({});
  const [toggleUpdating, setToggleUpdating] = useState(false);
  const { register, handleSubmit, reset } = useForm<TodoForm>();

  const onValid = ({ title, content }: TodoForm) => {
    updateTodo(title, content, params?.params.id, token);
    reset();
    setToggleUpdating((prev) => false);
  };
  const params = useMatch("/todo/:id");
  useEffect(() => {
    if (token) {
      getTodoById(params?.params.id, token).then((res) =>
        setTodoDetail(res.data)
      );
    }
  }, [token, params, todoDetail]);
  const onDeleteTodo = () => {
    if (window.confirm("정말 지우시겠습니까?")) {
      deleteTodo(params?.params.id, token);
      navigate("/todo");
    }
  };
  return (
    <ItemWrapper>
      {toggleUpdating ? (
        <FormBox onSubmit={handleSubmit(onValid)}>
          <Label htmlFor="title">Title</Label>
          <input {...register("title")} id="title" type="text" />
          <Label htmlFor="title">Content</Label>
          <input {...register("content")} id="content" type="text" />
          <ValidBtn type="submit">Update</ValidBtn>
          <ValidBtn onClick={() => setToggleUpdating((prev) => !prev)}>
            Cancel
          </ValidBtn>
        </FormBox>
      ) : (
        <FormBox as="div">
          <div>
            <h1>Title</h1>
            <span>{todoDetail?.title}</span>
          </div>
          <div>
            <h3>Content</h3>
            <span>{todoDetail?.content}</span>
          </div>
          <ValidBtn onClick={() => setToggleUpdating((prev) => !prev)}>
            Update
          </ValidBtn>
          <ValidBtn onClick={onDeleteTodo}>Delete</ValidBtn>
        </FormBox>
      )}
    </ItemWrapper>
  );
};

export default TodoDetail;

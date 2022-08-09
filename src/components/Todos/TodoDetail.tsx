import styled from "styled-components";
import { useMatch, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

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

const InnerBox = styled(FormBox)``;

const ValidBtn = styled.button`
  width: 120px;
  height: 40px;
  margin: 10px auto;
`;

const Label = styled.div``;

const TodoDetail = ({ token }) => {
  const navigate = useNavigate();
  const [todoDetail, setTodoDetail] = useState(null);
  const [toggleUpdating, setToggleUpdating] = useState(false);
  const {
    params: { id },
  } = useMatch("/todo/:id");
  useEffect(() => {
    getTodoById();
  }, [token, id]);

  const { register, handleSubmit, reset } = useForm();
  const onValid = ({ title, content }) => {
    setTodo(title, content, id);
    reset();
    setToggleUpdating((prev) => false);
    getTodoById();
  };

  const getTodoById = async () => {
    const { data } = await (
      await fetch(`http://localhost:8080/todos/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
      })
    ).json();
    if (!data) return navigate("/todo");
    setTodoDetail(data);
  };

  const setTodo = async (title, content) => {
    const data = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ title, content }),
    });
  };
  const deleteTodo = async () => {
    const data = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });
    navigate("/todo");
  };
  return (
    <ItemWrapper>
      {toggleUpdating ? (
        <FormBox onSubmit={handleSubmit(onValid)}>
          <Label as="h1" htmlFor="title">
            Title
          </Label>
          <input {...register("title")} id="title" type="text" />
          <Label as="h3" htmlFor="title">
            Content
          </Label>
          <input {...register("content")} id="content" type="text" />
          <ValidBtn type="submit">Update</ValidBtn>
          <ValidBtn onClick={() => setToggleUpdating((prev) => !prev)}>
            Cancel
          </ValidBtn>
        </FormBox>
      ) : (
        <InnerBox>
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
          <ValidBtn onClick={deleteTodo}>Delete</ValidBtn>
        </InnerBox>
      )}
    </ItemWrapper>
  );
};

export default TodoDetail;

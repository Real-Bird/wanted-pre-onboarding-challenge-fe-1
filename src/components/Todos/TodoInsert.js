import { useForm } from "react-hook-form";
import styled from "styled-components";

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const ValidBtn = styled.button`
  width: 120px;
  height: 40px;
  margin: 10px auto;
`;

const TodoInsert = ({ token }) => {
  const { register, handleSubmit, reset } = useForm();
  const onValid = ({ title, content }) => {
    setTodo(title, content);
    reset();
  };
  const setTodo = async (title, content) => {
    const data = await fetch(`http://localhost:8080/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ title, content }),
    });
  };
  return (
    <div className="TodoListItem">
      <FormBox onSubmit={handleSubmit(onValid)}>
        <label htmlFor="title">Title</label>
        <input {...register("title")} id="title" type="text" />
        <label htmlFor="title">Content</label>
        <input {...register("content")} id="content" type="text" />
        <ValidBtn type="submit">Insert</ValidBtn>
      </FormBox>
    </div>
  );
};

export default TodoInsert;

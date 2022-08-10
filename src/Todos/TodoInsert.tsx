import { useForm } from "react-hook-form";
import styled from "styled-components";
import { setTodo } from "../libs/todos";
import { Token } from "./TodoHome";

const FormBox = styled.form`
  display: flex;
  flex-direction: column;
`;

const ValidBtn = styled.button`
  width: 120px;
  height: 40px;
  margin: 10px auto;
`;

export interface TodoForm {
  title: string;
  content: string;
}

const TodoInsert = ({ token }: Token) => {
  const { register, handleSubmit, reset } = useForm<TodoForm>();
  const onValid = ({ title, content }: TodoForm) => {
    setTodo(title, content, token);
    reset();
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

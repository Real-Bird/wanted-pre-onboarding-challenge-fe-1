import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../components/input";
import {
  FormBox,
  LabelBox,
  TodoInsertWrapper,
  ValidBtn,
} from "../components/todosStyled";
import { setTodo } from "../libs/todos";
import { Token } from "./TodoHome";

export interface TodoForm {
  title: string;
  content: string;
}

const TodoInsert = ({ token }: Token) => {
  const { register, handleSubmit, reset } = useForm<TodoForm>();
  const onValid = ({ title, content }: TodoForm) => {
    if (!title || !content) return;
    setTodo(title, content, token);
    reset();
  };
  return (
    <TodoInsertWrapper>
      <FormBox onSubmit={handleSubmit(onValid)}>
        <Input
          register={register("title")}
          inputName="title"
          type="text"
          label="TITLE"
        />
        <Input
          register={register("content")}
          inputName="content"
          type="text"
          label="CONTENT"
        />
        <ValidBtn type="submit">Insert</ValidBtn>
      </FormBox>
    </TodoInsertWrapper>
  );
};

export default TodoInsert;

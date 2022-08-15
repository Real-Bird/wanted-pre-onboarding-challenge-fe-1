import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import Input from "../components/input";
import {
  FormBox,
  TodoInsertWrapper,
  ValidBtn,
} from "../components/todosStyled";
import { setTodo } from "../libs/todos";

export interface TodoForm {
  title: string;
  content: string;
}

const TodoInsert = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(
    ({ title, content }: TodoForm) => setTodo(title, content),
    {
      onSuccess: (data) => queryClient.invalidateQueries(["toDos"]),
      onError: (err) => console.log(err, "something wrong"),
    }
  );
  const { register, handleSubmit, reset } = useForm<TodoForm>();
  const onValid = ({ title, content }: TodoForm) => {
    if (!title || !content) return;
    // setTodo(title, content, token);
    mutation.mutate({ title, content });
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

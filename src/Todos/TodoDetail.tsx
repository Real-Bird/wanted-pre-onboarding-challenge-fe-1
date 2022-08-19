import styled from "styled-components";
import { useMatch, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TodoForm } from "./TodoInsert";
import { deleteTodo, getTodoById, updateTodo } from "../libs/todos";
import { TodosResponse } from "./TodoHome";
import {
  FormBox,
  DetailWrapper,
  OverviewItem,
  Subtitle,
  ValidBtn,
  LabelBox,
  ConfirmOverview,
  ToDoAlertBox,
} from "../components/todosStyled";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface IToDoById {
  [key: string]: TodosResponse;
}

const TodoDetail = () => {
  const navigate = useNavigate();
  const params = useMatch("/todo/:id");
  const queryClient = useQueryClient();
  const updateMutation = useMutation(
    ({ title, content }: TodoForm) =>
      updateTodo(title, content, `${params?.params.id}`),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["toDos"]);
        queryClient.invalidateQueries(["toDoById"]);
      },
    }
  );
  const deleteMutation = useMutation((id: string) => deleteTodo(id), {
    onSuccess: (data) => queryClient.invalidateQueries(["toDos"]),
  });
  const { isLoading, data: toDo } = useQuery<IToDoById>(
    ["toDoById", params?.params.id],
    () => getTodoById(params?.params.id ? params?.params.id : "")
  );
  const [toggleUpdating, setToggleUpdating] = useState(false);
  const [toggleConfirm, setToggleConfirm] = useState(false);
  const { register, handleSubmit, reset } = useForm<TodoForm>();
  const onValid = ({ title, content }: TodoForm) => {
    if (!title || !content) return;
    updateMutation.mutate({ title, content });
    reset();
    setToggleUpdating(false);
  };
  const onToggleConfirm = () => {
    setToggleConfirm(true);
  };

  const onDeleteTodo = () => {
    deleteMutation.mutate(`${params?.params.id}`);
    navigate("/todo");
  };
  return (
    <DetailWrapper>
      {toggleUpdating ? (
        <FormBox onSubmit={handleSubmit(onValid)}>
          <LabelBox>
            <input
              {...register("title", { value: toDo?.data.title })}
              id="title"
              type="text"
            />
            <span className="bar"></span>
            <label htmlFor="title">TITLE</label>
          </LabelBox>
          <LabelBox>
            <input
              {...register("content", { value: toDo?.data.content })}
              id="content"
              type="text"
            />
            <span className="bar"></span>
            <label htmlFor="content">CONTENT</label>
          </LabelBox>
          <div>
            <ValidBtn toggleUpdating={true} type="submit">
              Update
            </ValidBtn>
            <ValidBtn onClick={() => setToggleUpdating((prev) => !prev)}>
              Cancel
            </ValidBtn>
          </div>
        </FormBox>
      ) : (
        <FormBox as="div">
          <OverviewItem>
            <Subtitle>
              <span>TITLE : </span>
              <span>{toDo?.data.title}</span>
            </Subtitle>
          </OverviewItem>
          <OverviewItem>
            <Subtitle>
              <span>CONTENT : </span>
              <span>{toDo?.data.content}</span>
            </Subtitle>
          </OverviewItem>
          <div>
            <ValidBtn onClick={() => setToggleUpdating((prev) => !prev)}>
              Update
            </ValidBtn>
            <ValidBtn onClick={onToggleConfirm}>Delete</ValidBtn>
          </div>
        </FormBox>
      )}
      {toggleConfirm && (
        <ConfirmOverview>
          <ToDoAlertBox>
            <span>"정말 삭제하시겠습니까?"</span>
            <div>
              <button onClick={onDeleteTodo}>O</button>
              <button onClick={() => setToggleConfirm(false)}>X</button>
            </div>
          </ToDoAlertBox>
        </ConfirmOverview>
      )}
    </DetailWrapper>
  );
};

export default TodoDetail;

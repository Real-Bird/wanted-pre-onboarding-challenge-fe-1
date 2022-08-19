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
      onSuccess: (data) => queryClient.invalidateQueries(["toDos"]),
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
  const [isUpdating, setIsUpdating] = useState(false);
  const { register, handleSubmit, reset, getValues } = useForm<TodoForm>();
  const onValid = ({ title, content }: TodoForm) => {
    if (!title || !content) return;
    if (isUpdating) {
      updateMutation.mutate({ title, content });
      reset();
      setToggleUpdating(false);
    }
  };
  const onToggleConfirm = () => {
    if (toggleUpdating && (!getValues("content") || !getValues("title")))
      return;
    setToggleConfirm(true);
  };

  const onIsUpdating = () => setIsUpdating(true);
  const onDeleteTodo = () => {
    deleteMutation.mutate(`${params?.params.id}`);
    navigate("/todo");
  };
  return (
    <DetailWrapper>
      {toggleUpdating ? (
        <FormBox onSubmit={handleSubmit(onValid)}>
          <LabelBox>
            <input {...register("title")} id="title" type="text" />
            <span className="bar"></span>
            <label htmlFor="title">TITLE</label>
          </LabelBox>
          <LabelBox>
            <input {...register("content")} id="content" type="text" />
            <span className="bar"></span>
            <label htmlFor="content">CONTENT</label>
          </LabelBox>
          <div>
            <ValidBtn
              onClick={onToggleConfirm}
              toggleUpdating={true}
              type="submit"
            >
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
            <span>
              {toggleUpdating
                ? "정말 수정하시겠습니까?"
                : "정말 삭제하시겠습니까?"}
            </span>
            <div>
              <button onClick={toggleUpdating ? onIsUpdating : onDeleteTodo}>
                O
              </button>
              <button onClick={() => setToggleConfirm(false)}>X</button>
            </div>
          </ToDoAlertBox>
        </ConfirmOverview>
      )}
    </DetailWrapper>
  );
};

export default TodoDetail;

import styled from "styled-components";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TodoForm } from "./TodoInsert";
import { deleteTodo, getTodoById, updateTodo } from "../libs/todos";
import { TodosResponse, Token } from "./TodoHome";
import {
  FormBox,
  DetailWrapper,
  OverviewItem,
  Subtitle,
  ValidBtn,
  LabelBox,
} from "../components/todosStyled";

const Label = styled.label`
  font-size: 32px;
`;

const TodoDetail = ({ token }: Token) => {
  const navigate = useNavigate();
  const [todoDetail, setTodoDetail] = useState<TodosResponse>();
  const [toggleUpdating, setToggleUpdating] = useState(false);
  const { register, handleSubmit, reset } = useForm<TodoForm>();
  const onValid = ({ title, content }: TodoForm) => {
    if (!title || !content) return;
    if (window.confirm("수정하시겠습니까?")) {
      updateTodo(title, content, `${params?.params.id}`, token);
      reset();
      setToggleUpdating(false);
    }
  };
  const params = useMatch("/todo/:id");
  useEffect(() => {
    if (token) {
      getTodoById(`${params?.params.id}`, token).then((res) =>
        setTodoDetail(res.data)
      );
    }
  }, [token, params, todoDetail]);
  const onDeleteTodo = () => {
    if (window.confirm("정말 지우시겠습니까?")) {
      deleteTodo(`${params?.params.id}`, token);
      navigate("/todo");
    }
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
              <span>{todoDetail?.title}</span>
            </Subtitle>
          </OverviewItem>
          <OverviewItem>
            <Subtitle>
              <span>CONTENT : </span>
              <span>{todoDetail?.content}</span>
            </Subtitle>
          </OverviewItem>
          <div>
            <ValidBtn onClick={() => setToggleUpdating((prev) => !prev)}>
              Update
            </ValidBtn>
            <ValidBtn onClick={onDeleteTodo}>Delete</ValidBtn>
          </div>
        </FormBox>
      )}
    </DetailWrapper>
  );
};

export default TodoDetail;

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getLogin } from "../libs/users";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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

const ToggleBtn = styled(ValidBtn)``;

interface FormProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>();
  const onValid = async ({ email, password }: FormProps) => {
    const { data, ok } = await getLogin(email, password, toggleForm);
    if (!ok) {
      setIsLogged(ok);
      alert(data.message);
      return;
    }
    setIsLogged(ok);
  };
  useEffect(() => {
    if (isLogged) navigate("/todo");
  }, [isLogged]);
  const onToggleForm = () => setToggleForm((prev) => !prev);
  return (
    <Wrapper>
      <h1>{toggleForm ? "Sign Up" : "Log In"}</h1>
      <FormBox onSubmit={handleSubmit(onValid)}>
        <label htmlFor="email">Email</label>
        <input
          {...register("email", {
            required: "이메일은 필수입니다.",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/,
              message: "올바른 메일 양식이 아닙니다.",
            },
          })}
          type="email"
          id="email"
        />
        {errors.email && <span>{errors.email?.message}</span>}
        <label htmlFor="password">Password</label>
        <input
          {...register("password", {
            required: true,
            pattern: {
              value: /^[0-9a-zA-Z]{8,}/g,
              message: "비밀번호는 8자 이상입니다.",
            },
          })}
          type="password"
          id="password"
        />
        {errors.password && <span>{errors.password?.message}</span>}
        <ValidBtn type="submit">{toggleForm ? "Sign up" : "Log in"}</ValidBtn>
      </FormBox>
      <ToggleBtn onClick={onToggleForm}>
        {toggleForm ? "Go to Log In" : "Go to Sign Up"}
      </ToggleBtn>
    </Wrapper>
  );
};

export default LoginForm;

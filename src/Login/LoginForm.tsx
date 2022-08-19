import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  AlertBox,
  AuthOverview,
  AuthTitle,
  AuthValidBtn,
} from "../components/authStyled";
import Input from "../components/input";
import { FormBox } from "../components/todosStyled";
import { getLogin } from "../libs/users";

interface FormProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [toggleForm, setToggleForm] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [statusAlert, setStatusAlert] = useState<string | null>();
  const [isRed, setIsRed] = useState(true);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormProps>({ mode: "onChange" });
  const onValid = async ({ email, password }: FormProps) => {
    const { data, ok } = await getLogin(email, password, toggleForm);
    if (!ok) {
      setIsLogged(false);
      setIsRed(true);
      setStatusAlert(data.message);
      return;
    }
    if (data.formType === "create") {
      setStatusAlert(data.message);
      setIsRed(false);
      setToggleForm(false);
      reset();
      return;
    }
    setIsLogged(ok);
    reset();
  };
  useEffect(() => {
    setTimeout(() => setStatusAlert(null), 5000);
  }, [statusAlert]);
  useEffect(() => {
    if (isLogged) navigate("/todo");
  }, [isLogged]);
  const onToggleForm = () => setToggleForm((prev) => !prev);
  return (
    <AuthOverview toggleForm={toggleForm}>
      {statusAlert && (
        <AlertBox isRed={isRed}>
          <span onClick={() => setStatusAlert(null)}>x</span>
          {statusAlert}
        </AlertBox>
      )}
      <AuthTitle toggleForm={toggleForm}>
        {toggleForm ? "Sign Up" : "Log In"}
      </AuthTitle>
      <FormBox onSubmit={handleSubmit(onValid)}>
        <Input
          register={register("email", {
            required: "이메일은 필수입니다.",
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.{1}[a-zA-Z]{2,3}$/gi,
              message: "올바른 메일 양식이 아닙니다.",
            },
          })}
          inputName="email"
          type="email"
          label="Email"
          error={errors.email ? errors.email?.message : ""}
        />
        <Input
          register={register("password", {
            required: "비밀번호는 필수입니다.",
            pattern: {
              value: /^[0-9a-zA-Z]{8,}/g,
              message: "비밀번호는 8자 이상입니다.",
            },
          })}
          inputName="password"
          type="password"
          label="Password"
          error={errors.password ? errors.password?.message : ""}
        />
        <AuthValidBtn toggleForm={toggleForm} type="submit">
          {toggleForm ? "Sign up" : "Log in"}
        </AuthValidBtn>
      </FormBox>
      <AuthValidBtn toggleForm={toggleForm} onClick={onToggleForm}>
        {toggleForm ? "Go to Log In" : "Go to Sign Up"}
      </AuthValidBtn>
    </AuthOverview>
  );
};

export default LoginForm;

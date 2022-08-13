import {
  DeepRequired,
  FieldErrorsImpl,
  FormProviderProps,
  UseFormRegisterReturn,
} from "react-hook-form";
import { ErrorMessage, LabelBox } from "./todosStyled";

interface InputProps {
  label: string;
  inputName: string;
  type: string;
  register: UseFormRegisterReturn;
  value?: string;
  error?: string;
}

const Input = ({
  label,
  inputName,
  type,
  register,
  value,
  error,
}: InputProps) => {
  return (
    <LabelBox>
      <input
        className="isValid"
        {...register}
        id={inputName}
        type={type}
        value={value}
      />
      <span className="bar"></span>
      <label htmlFor={inputName}>{label}</label>
      <ErrorMessage>{error}</ErrorMessage>
    </LabelBox>
  );
};

export default Input;

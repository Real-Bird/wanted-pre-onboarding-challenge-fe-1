import styled from "styled-components";
import LoginForm from "./LoginForm";

const LoginBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 4rem auto;
`;

const Auth = () => {
  return (
    <LoginBox>
      <LoginForm />
    </LoginBox>
  );
};

export default Auth;

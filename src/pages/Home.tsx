import { Navigate } from "react-router-dom";
import { Token } from "../Todos/TodoHome";

export default function Home({ token }: Token) {
  return (
    <>
      {token ? (
        <Navigate to="/todo" replace={true} />
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
}

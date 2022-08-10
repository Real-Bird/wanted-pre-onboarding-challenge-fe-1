import { useEffect, useState } from "react";
import { hasToken } from "../libs/users";
import TodosHome, { Token } from "../Todos/TodoHome";
import Auth from "./Auth";

export default function Home({ token }: Token) {
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const isToken = hasToken("token");
    setIsLogged(isToken);
  }, [isLogged]);
  return <div>{isLogged ? <TodosHome token={token} /> : <Auth />}</div>;
}

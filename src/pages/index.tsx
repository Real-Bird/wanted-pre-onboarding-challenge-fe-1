import { useEffect, useState } from "react";
import Auth from "../components/auth";
import TodosHome from "../components/Todos";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState("");
  useEffect(() => {
    getToken();
    if (isLogged) {
      console.log("a");
    } else {
      console.log("b");
    }
  }, [isLogged]);

  const getToken = () => {
    const token = localStorage.getItem("token");
    setIsLogged(Boolean(token));
    setToken(token);
  };
  return (
    <div>
      {isLogged ? (
        <TodosHome isLogged={isLogged} token={token} />
      ) : (
        <Auth token={token} />
      )}
    </div>
  );
}

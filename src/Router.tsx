import { useEffect, useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { getToken } from "./libs/users";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import TodoDetail from "./Todos/TodoDetail";
import TodosHome from "./Todos/TodoHome";

const AppRouter = () => {
  const [token, setToken] = useState<string>("");
  useEffect(() => {
    setToken(getToken("token"));
  }, [token]);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home token={token} />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/todo" element={<TodosHome token={token} />} />
          <Route path="/todo/:id" element={<TodoDetail token={token} />} />
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

import React, { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "../pages";
import Auth from "./auth";
import TodosHome from "./Todos";
import TodoDetail from "./Todos/TodoDetail";

const AppRouter = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [loginToken, setLoginToken] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setLoginToken(localStorage.getItem("token"));
      setIsLogged(true);
    } else {
      setLoginToken(null);
      setIsLogged(false);
    }
  }, [loginToken]);
  return (
    <>
      <Router>
        <Routes>
          {isLogged ? (
            <>
              <Route exact path="/" element={<Home />} />
              <Route
                exact
                path="/todo"
                element={<TodosHome token={loginToken} />}
              />
              <Route
                exact
                path="/todo/:id"
                element={<TodoDetail token={loginToken} />}
              />
            </>
          ) : (
            <Route exact path="/" element={<Auth />} />
          )}
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

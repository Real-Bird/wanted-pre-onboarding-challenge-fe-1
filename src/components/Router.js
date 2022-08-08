import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "./auth";
import TodosHome from "./Todos";
import TodoDetail from "./Todos/TodoDetail";

const AppRouter = ({ isLogged, token }) => {
  return (
    <>
      <Router>
        <Routes>
          {isLogged ? (
            <>
              <Route exact path="/" element={<TodosHome token={token} />} />
              <Route exact path="/:id" element={<TodoDetail token={token} />} />
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

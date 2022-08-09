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

const AppRouter = ({ isLogged, loginToken }) => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home isLogged={isLogged} />} />
          <Route exact path="/login" element={<Auth />} />
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
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

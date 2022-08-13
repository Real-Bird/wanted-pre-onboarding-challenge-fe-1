import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { getToken, hasToken } from "./libs/users";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import TodoDetail from "./Todos/TodoDetail";
import TodosHome from "./Todos/TodoHome";

const AppRouter = () => {
  const [token, setToken] = useState<boolean>();
  useEffect(() => {
    setToken(hasToken("token"));
  }, [token]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home token={`${token}`} />} />
          <Route path="login" element={<Auth />} />
          <Route
            path="todo/*"
            element={
              <RequireAuth>
                <TodosHome />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;

function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = hasToken("token");
  let location = useLocation();

  if (!auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

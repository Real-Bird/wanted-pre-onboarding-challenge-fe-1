import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import NotFound from "./404";
import { hasToken } from "./libs/users";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
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
          <Route
            path="login"
            element={
              <HasAuth>
                <Auth />
              </HasAuth>
            }
          />
          <Route
            path="todo/*"
            element={
              <RequireAuth>
                <TodosHome />
              </RequireAuth>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = hasToken("token");
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

function HasAuth({ children }: { children: JSX.Element }) {
  const auth = hasToken("token");
  const location = useLocation();

  if (auth) {
    return <Navigate to="/todo" state={{ from: location }} replace />;
  }

  return children;
}

import { useEffect, useState } from "react";
import AppRouter from "./components/Router";

function App() {
  const [loginToken, setLoginToken] = useState(localStorage.getItem("token"));
  useEffect(() => {
    if (loginToken) {
      setLoginToken(localStorage.getItem("token"));
    } else {
      setLoginToken(null);
    }
  }, [loginToken]);
  return (
    <>
      <AppRouter isLogged={Boolean(loginToken)} token={loginToken} />
    </>
  );
}

export default App;

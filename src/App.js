import { useState, useEffect } from "react";
import AppRouter from "./components/Router";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [loginToken, setLoginToken] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setLoginToken(localStorage.getItem("token"));
    }
    setLoading((prev) => false);
    if (loginToken) setIsLogged((prev) => true);
  }, [loading]);
  return (
    <>
      <AppRouter isLogged={isLogged} token={loginToken} />
    </>
  );
}

export default App;

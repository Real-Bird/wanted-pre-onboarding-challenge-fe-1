import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/globalStyled";
import { lightTheme } from "./libs/theme";
import AppRouter from "./Router";
import "./index.css";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  textColor: "#1B1464",
  bgColor: "white",
  accentColor: "#ED4C67",
  todoBgColor: "#bdc3c7",
  overviewBgColor: "#bdc3c7",
  todoShadow: `rgba(0, 0, 0, 0.4) 5px 5px, rgba(0, 0, 0, 0.3) 10px 10px,
    rgba(0, 0, 0, 0.2) 15px 15px, rgba(0, 0, 0, 0.1) 20px 20px,
    rgba(0, 0, 0, 0.05) 25px 25px`,
};

export const darkTheme: DefaultTheme = {
  textColor: "white",
  bgColor: "#1B1464",
  accentColor: "#ED4C67",
  todoBgColor: "#fff",
  overviewBgColor: "rgba(0, 0, 0, 0.5)",
  todoShadow: ` rgba(255, 255, 255, 0.4) 5px 5px, rgba(255, 255, 255, 0.3) 10px 10px,
    rgba(255, 255, 255, 0.2) 15px 15px, rgba(255, 255, 255, 0.1) 20px 20px,
    rgba(255, 255, 255, 0.05) 25px 25px`,
};

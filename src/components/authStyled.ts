import styled, { keyframes } from "styled-components";

export const AuthOverview = styled.div<{ toggleForm: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.overviewBgColor};
  padding: 10px 20px;
  border-radius: 10px;
`;

export const AuthTitle = styled.h1<{ toggleForm: boolean }>`
  color: ${(props) => (props.toggleForm ? "#0A7373" : "#e62c03")};
  font-size: 32px;
`;

export const AuthValidBtn = styled.button<{ toggleForm: boolean }>`
  margin-bottom: 5px;
  background-color: initial;
  background-image: ${(props) =>
    props.toggleForm
      ? "linear-gradient(-180deg, #0A7373, #B7BF99)"
      : "linear-gradient(-180deg, #ff7e31, #e62c03)"};
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: #ffffff;
  cursor: pointer;
  font-family: "Gugi", cursive;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;
  width: 100%;
  z-index: 9;
  border: 0;
  transition: 0.2s ease-in-out;
  &:hover {
    box-shadow: ${(props) =>
      props.toggleForm
        ? "rgba(253, 76, 0, 0.5) 0 3px 8px"
        : "rgba(47, 132, 123, 0.5) 0 3px 8px"};
  }
`;

const AlertOpacity = keyframes`
  from {
    right:-100px;
  }  
  to {
    right:5px;
  }
`;

export const AlertBox = styled.div<{ isRed: boolean }>`
  padding: 20px;
  background-color: ${(props) => (props.isRed ? "#f44336" : "#2ecc71")};
  color: white;
  position: absolute;
  top: 10px;
  right: 5px;
  span {
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color: black;
    }
  }
  animation: ${AlertOpacity} 0.5s;
`;

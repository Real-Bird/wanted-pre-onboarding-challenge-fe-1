import styled from "styled-components";

export const Container = styled.div`
  padding: 0 20px;
  max-width: 50%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  justify-content: center;
`;

export const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 32px;
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.overviewBgColor};
  padding: 10px 20px;
  border-radius: 10px;
`;

export const TodoItemWrapper = styled.ul`
  width: 100%;
`;

export const TodoItem = styled.li<{ isSelect: boolean }>`
  color: ${(props) =>
    props.isSelect ? props.theme.accentColor : props.theme.textColor};
  font-size: 1.3rem;
  border-radius: 10px;
  margin-bottom: 10px;
  a {
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

export const TodoListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const OverviewItem = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 5px 0;
  background-color: ${(props) => props.theme.todoBgColor};
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const FormBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

export const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  span:last-child {
    font-size: 1.6rem;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

export const ValidBtn = styled.button<{ toggleUpdating?: boolean }>`
  margin-bottom: 5px;
  background-color: initial;
  background-image: ${(props) =>
    props.toggleUpdating
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
    box-shadow: rgba(253, 76, 0, 0.5) 0 3px 8px;
  }
`;

export const LabelBox = styled.div`
  margin: 15px 0 15px 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  input {
    order: 2;
    background: none;
    color: ${(props) => props.theme.textColor};
    font-size: 18px;
    padding: 0 10px 0 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${(props) => props.theme.textColor};
    &:focus {
      outline: none;
    }
    &:focus ~ label {
      color: ${(props) => props.theme.accentColor};
    }
    &:focus ~ span.bar:before {
      width: 100%;
    }
  }
  label {
    order: 1;
    color: ${(props) => props.theme.textColor};
    font-size: 12px;
    font-weight: normal;
    pointer-events: none;
    transition: 0.3s ease all;
  }
  span.bar {
    order: 3;
    position: relative;
    display: block;
    width: 100%;
    &:before {
      content: "";
      height: 2px;
      width: 0;
      bottom: 0px;
      position: absolute;
      background: ${(props) => props.theme.accentColor};
      transition: 0.3s ease all;
      left: 0%;
    }
  }
`;

export const ErrorMessage = styled.span`
  padding-top: 2px;
  order: 4;
  color: ${(props) => props.theme.accentColor};
`;

export const TodoInsertWrapper = styled.div`
  width: 100%;
`;

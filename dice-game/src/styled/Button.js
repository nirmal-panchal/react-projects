import styled from "styled-components";

export const Button = styled.button`
  padding: 10px 18px;
  background: #000;
  color: white;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background;
  &:hover {
    background: white;
    border: 1px solid black;
    color: #000;
    transition: 0.3s background;
  }
`;

export const OutlineButton = styled(Button)`
  &:hover {
    background: black;
    border: 1px solid transparent;
    color: white;
    transition: 0.3s background;
  }
  border: 1px solid black;
  color: black;
  background: white;
`;

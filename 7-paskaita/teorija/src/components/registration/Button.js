import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.buttonColor || "white"};
  padding: 7px;
  border: 0.2px solid #e1e1e1;
  color: ${(props) => props.textColor || "black"};
  border-radius: 6px;
  font-size: 0.7rem;
  transition: 0.1s;
  &:hover {
    background-color: ${(props) => props.hoverColor || "#E5E5E5"};
  }
`;

export default Button;

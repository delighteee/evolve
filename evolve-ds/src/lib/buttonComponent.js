import React from "react";
import styled from "styled-components";
import { flexbox, space, layout, color, position, border } from "styled-system";

// Styled Button using Styled System
const StyledButton = styled.button`
  ${flexbox}
  ${space}
  ${layout}
  ${color}
  ${position}
  ${border}
  

  font-style: normal;
  font-weight: 400;
  font-family: "Manrope", sans-serif;
  line-height: 150%;
  box-sizing: border-box;

  background-color: ${(props) => props.theme.semanticColors.background.default};
  &:hover {
    background-color: ${(props) => props.theme.semanticColors.background.defaultHover};
  }

 
  // Optional: Add styles for disabled state if needed
  &:disabled {
    background-color: ${(props) =>
      props.theme.semanticColors.background.default};
    color: ${(props) => props.theme.semanticColors.typography.default};
    cursor: not-allowed;
  }
`;

// Button component using Styled System props
const Button = ({ label, ...rest }) => {
  return <StyledButton {...rest}>{label}</StyledButton>;
};

export default Button;

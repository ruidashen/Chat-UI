import styled from "styled-components";
import React from "react";

const StyledButton = styled.div`
  width: ${(props) => props.width || "80px"};
  background-color: ${({ theme }) => theme.primaryColor};
`;

export default function Button({ width, onClick, label, children }) {
  return (
    <StyledButton onClick={onClick} width={width}>
      <button>{label}</button>
      {children}
    </StyledButton>
  );
}

import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Quicksand', sans-serif;
  padding: 6px 12px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  display: inline-block;
  touch-action: manipulation;
  background-color: #5C5A61;
  color: #FFF;
  border: 1px solid transparent;
  border-radius: .25rem;

  &:hover,
  &:focus,
  &:active {
    background-color: #5C5A61;
    box-shadow: 0px 0px 7px #5C5A61;
  }
`;

const Button = (props) => (
  <StyledButton>
    {props.children}
  </StyledButton>
);

export default Button;
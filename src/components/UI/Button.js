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
  background-color: #FF746A;
  color: #FFF;
  border: 1px solid transparent;
  border-radius: .25rem;

  &:hover,
  &:focus,
  &:active {
    background-color: #FF746A;
    box-shadow: 0px 0px 7px #FF746A;
  }
`;

const Button = (props) => (
  <StyledButton>
    {props.children}
  </StyledButton>
);

export default Button;
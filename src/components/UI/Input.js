import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: relative;
  margin: 30px auto;
  width: 400px;

  @media (max-width: 700px) {
    width: 90%;
  }
`;

const StyledInput = styled.input`
  background-color: transparent;
  color: #FF746A;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 16px;
  outline: none;
  margin-bottom: 0;
  width: 100%;
  padding: 0.5em 0;
  border: none;
  border-bottom: 1px solid rgba(92, 90, 97, 0.5);
  transition: box-shadow .15s ease-in-out;

  & ~ label {
    width: 100%;
    color: #5C5A61; 
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 0px;
    top: 10px;
    transition: 0.2s ease all; 
    -moz-transition: 0.2s ease all; 
    -webkit-transition: 0.2s ease all;
  }

  &:focus {
    box-shadow: 0px -2px 0px #8C807D inset;
    border-bottom: 1px solid #8C807D;
  }

  &:focus ~ label,
  &:valid ~ label {
    top: 40px;
    font-size: 14px;
    color: #5C5A61;
  }
`;

const Input = (props) => (
  <Div>
    <StyledInput 
      id={props.id}
      type={props.type} 
      value={props.value}
      required={props.required}
      onChange={props.onChange}
    />
    <label>{props.label}</label>
  </Div>
);

export default Input;
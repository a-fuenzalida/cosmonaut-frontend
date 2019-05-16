import React from 'react';
import styled from 'styled-components';

const Loader = styled.div`
  color: #FF746A;
  font-size: 11px;
  text-indent: -99999em;
  margin: 55px auto;
  position: relative;
  width: 10em;
  height: 10em;
  box-shadow: inset 0 0 0 1em;
  transform: translateZ(0);

  &,
  &:before,
  &:after {
    border-radius: 50%;
  }

  &:before,
  &:after {
    position: absolute;
    content: '';
  }

  &:before {
    width: 5.2em;
    height: 10.2em;
    background: rgb(228, 228, 228);
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    transform-origin: 5.2em 5.1em;
    animation: load2 2s infinite ease 1.5s;
  }

  &:after {
    width: 5.2em;
    height: 10.2em;
    background: rgb(228, 228, 228);
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    transform-origin: 0px 5.1em;
    animation: load2 2s infinite ease;
  }

  @keyframes load2 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <Loader />
  )
}

export default Spinner;
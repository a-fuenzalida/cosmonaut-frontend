import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 100;
`;

const Backdrop = (props) => {
  return (
    props.show ? 
    <Div onClick={props.click}></Div> : null 
  )
}

export default Backdrop;

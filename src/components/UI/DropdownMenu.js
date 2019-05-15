import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  z-index: 200;
  margin: 56px 10px;
  right: 0;
  font-size: 14px;
  position: absolute;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.2em;
  width: 200px;
  height: auto;
`;

const DropdownMenu = (props) => {
  return (
    <Div>
      {props.children}
    </Div>
  )
}

export default DropdownMenu;
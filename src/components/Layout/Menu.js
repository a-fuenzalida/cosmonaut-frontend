import React, { useContext } from 'react';
import styled from 'styled-components';

import { AuthContext } from '../../context/AuthContext';

import DropdownMenu from '../UI/DropdownMenu';

const Ul = styled.ul`
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 5px;

  & li {
    padding: 5px;
  }

  & li button {
    cursor: pointer;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
    border: none;
    background-color: transparent;
  }
`;

const Menu = (props) => {
  const authContext = useContext(AuthContext);
  return (
    <DropdownMenu>
      <Ul>
        <li>
          Ver perfil
        </li>
        <li>
          <button onClick={() => {authContext.handleLogout(); props.close();}}>Cerrar sesión</button>
        </li>
      </Ul>
    </DropdownMenu>
  )
}

export default Menu;
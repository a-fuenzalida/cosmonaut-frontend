import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext';

import DropdownMenu from '../UI/DropdownMenu';

const Ul = styled.ul`
  display: block;
  list-style-type: none;
  margin: 0;
  padding: 0;

  & li button {
    cursor: pointer;
    padding: 10px;
    font-size: inherit;
    font-family: inherit;
    border: none;
    background-color: transparent;
  }
`;

const MenuHeader = styled.header`
  background-color: #FAE5E1;
  margin: 0;
  padding: 10px;
  font-size: 14px;
  height: 60px;
`;

const Img = styled.img`
  float: left;
  margin-right: 10px;
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;

  &:after {
    clear: both;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Menu = (props) => {
  const authContext = useContext(AuthContext);
  return (
    <DropdownMenu>
      <StyledLink onClick={props.close} to={"/" + authContext.user.nickname}>
        <MenuHeader>
          <Img src={process.env.REACT_APP_API_URL + authContext.user.picture.url} />
          @<strong>
            {authContext.user.nickname.lenght > 14 ? authContext.user.nickname.substring(0, 14) + "..." : authContext.user.nickname}
          </strong><br />
          Ver mi perfil
        </MenuHeader>
      </StyledLink>
      <Ul>
        <li>
          <button onClick={() => {authContext.handleLogout(); props.close();}}>Cerrar sesión</button>
        </li>
      </Ul>
    </DropdownMenu>
  )
}

export default Menu;
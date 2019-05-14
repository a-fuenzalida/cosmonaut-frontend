import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../UI/Button';
import Input from '../UI/Input';

const Div = styled.div`
  padding: 10px;
  position: relative;
  text-align: center;
`;

const RegisterButton = styled.button`
  cursor: pointer;
  font-weight: bold;
  color: #424140;
  text-decoration: none;
  border: none;
  padding: 0;
  margin: 10px;
  font-family: 'Quicksand';
  font-size: inherit;
  background-color: inherit;
`;

const IngresarForm = (props) => (
  <Div>
    <form onSubmit={props.submit}>
      <Input id="nickname" onChange={props.change} label="Nombre de usuario" type="text" value={props.nickname} required/>
      <Input id="password" onChange={props.change} label="Contraseña" type="password" value={props.password} required/>
      <Button type="submit">Ingresar</Button>
    </form>
    <Link to="/registrar"><RegisterButton>Crear una cuenta</RegisterButton></Link>
  </Div>
);

export default IngresarForm;
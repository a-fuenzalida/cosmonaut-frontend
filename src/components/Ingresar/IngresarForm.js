import React from 'react';
import styled from 'styled-components';

import Button from '../UI/Button';
import Input from '../UI/Input';

const Div = styled.div`
  padding: 10px;
  position: relative;
  text-align: center;
`;

const IngresarForm = (props) => (
  <Div>
    <form onSubmit={props.submit}>
      <Input id="nickname" onChange={props.change} label="Nombre de usuario" type="text" value={props.nickname} required/>
      <Input id="password" onChange={props.change} label="Contraseña" type="password" value={props.password} required/>
      <Button type="submit">Ingresar</Button>
    </form>
  </Div>
);

export default IngresarForm;
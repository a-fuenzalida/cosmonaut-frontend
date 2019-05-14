import React, { Component } from 'react';
import styled from 'styled-components';

import Background from '../assets/background-1.jpg';

import { AuthContext } from '../context/AuthContext';

import IngresarForm from '../components/Ingresar/IngresarForm';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 100%;
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
`;

const IngresarCard = styled.div`
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.9);
  width: 500px;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

const Error = styled.div`
  margin: 10px;
  font-size: 14px;
  text-align: center;
  color: #E0493F;
`;

class Ingresar extends Component {
  static contextType = AuthContext;

  state = {
    nickname: "",
    password: ""
  }

  handleFormSubmit = (event) => {
    if (this.state.nickname.length > 0 && this.state.password.length > 0) {
      this.context.handleLogin(this.state.nickname, this.state.password);
      this.setState({
        nickname: "",
        password: ""
      });
    }
    event.preventDefault();
  }

  handleFormChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
  const value = this.context;
    return (
      <Div>
        <IngresarCard>
          <IngresarForm nickname={this.state.nickname} password={this.state.password} submit={this.handleFormSubmit} change={this.handleFormChange} />
          {
            value.errorLogin ?
            <Error>
              {value.errorLogin}
            </Error> : null
          }
        </IngresarCard>
      </Div>
      
    )
  }
}

export default Ingresar;
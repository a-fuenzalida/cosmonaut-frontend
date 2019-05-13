import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext';

import Menu from './Menu';
import Backdrop from '../UI/Backdrop';

const StyledNav = styled.nav`
  z-index: 300;
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  filter: inherit;

  @media (max-width: 700px) {
    position: fixed;
  }

  & span {
    font-family: 'Quicksand', sans-serif;
    font-size: 21px;
    padding: 0;
  }

  & input {
    border: none;
    border-radius: 10%;
  }

  & ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 0;
    margin: 0;
    background: #FFF;
  }

  & li i {
    font-size: 24px;
  }

  & li button {
    font-family: 'Quicksand';
    font-size: 16px;
    height: 100%;
    outline: none;
    border: none;
    background: transparent;
    float: left;
    padding: 15px 15px;
    cursor: pointer;
    color: #5C5A61;
    display: block;
    text-decoration: none;

    @media (max-width: 700px) {
      padding: 15px 10px;
    }
  }

  & li button:hover,
  & li button:active {
    opacity: 0.6;
    transition: 0.2s ease-out;
  }

  & ul:after {
    clear: both;
    display: block;
  }
`;

class Nav extends Component {
  static contextType = AuthContext;

  state = {
    dropdown: false
  }

  toggleDropdown = () => {
    this.setState(state => ({
      dropdown: !state.dropdown
    }));
  }

  closeDropdown = () => {
    if (this.state.dropdown) {
      this.setState({
        dropdown: false
      });
    }
  }

  render() {
    let menuButtons = null;
    
    if (this.context.user) {
      menuButtons = (
        <>
          <button><i className="fas fa-search"></i></button>
          <button><i className="fas fa-bell"></i></button>
          <button onClick={this.toggleDropdown}><i className="fas fa-bars"></i></button>
        </>
      );
    }
    else {
      menuButtons = (
        <>
          <Link to="/ingresar"><button>Iniciar sesión</button></Link>
        </>
      );
    }

    return (
      <>
      <StyledNav>
        <ul>
          <li>
            <Link to="/"><button><i className="fas fa-home"></i> <span>Cosmonaut</span></button></Link>
          </li>
          <li>
            {menuButtons}
          </li>
        </ul>
      </StyledNav>
      {this.state.dropdown ? 
        <>
          <Backdrop click={this.closeDropdown} transparent show/>
          <Menu close={this.closeDropdown}/> 
        </>
        : null}
      </>
    );
  }
}

export default Nav;
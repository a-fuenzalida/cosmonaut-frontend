import React, { Component } from 'react';

import axios from '../axios';

export const AuthContext = React.createContext();

export class AuthContextProvider extends Component {
  state = {
    user: null,
    loaded: false,
    errorLogin: null
  }

  componentDidMount() {
    this.setCurrentUser();
    this.setState({
      loaded: false
    });
  }

  handleLogin = (nickname, password) => {
    axios.post('auth/sign_in', {nickname, password})
      .then(response => {
        localStorage.setItem('access-token', response.headers['access-token']);
        localStorage.setItem('client', response.headers['client']);
        localStorage.setItem('uid', response.headers['uid']);
        this.setState({
          errorLogin: null,
          loaded: true
        });
        this.setCurrentUser();
        window.location.assign("/");
      })
      .catch(error => {
        if (!error.response) {
          this.setState({
            errorLogin: 'Hubo un problema. Intenta más tarde.',
            loaded: true
          })
        }
        else if (error.response.status === 401) {
          this.setState({
            errorLogin: 'Los datos ingresados son incorrectos.',
            loaded: true
          });
        }
        else {
          this.setState({
            errorLogin: 'Error desconocido.',
            loaded: true
          })
        }
      });
  }

  setCurrentUser = () => {
    if (localStorage.getItem('uid')) {
      axios.get('api/v1/me', {
        headers: {
          'access-token': localStorage.getItem('access-token'),
          'client': localStorage.getItem('client'),
          'uid': localStorage.getItem('uid')
        }
      })
        .then(response => {
          this.setState({
            user: response.data
          });
        })
        .catch(error => {
          console.log("User a null");
          localStorage.removeItem('access-token');
          localStorage.removeItem('client');
          localStorage.removeItem('uid');
          this.setState({
            user: null
          })
        });
    }
  }

  handleLogout = () => {
    axios.delete('auth/sign_out', {
      headers: {
        'access-token': localStorage.getItem('access-token'),
        'client': localStorage.getItem('client'),
        'uid': localStorage.getItem('uid')
      }
    })
      .then(response => {
        localStorage.removeItem('access-token');
        localStorage.removeItem('client');
        localStorage.removeItem('uid');
        this.setState({
          user: null
        });
      })
      .catch(error => {
        localStorage.removeItem('access-token');
        localStorage.removeItem('client');
        localStorage.removeItem('uid');
        this.setState({
          user: null
        });
      });
  }

  render() {
    return (
      <AuthContext.Provider 
        value={{
          user: this.state.user, 
          handleLogin: this.handleLogin, 
          handleLogout: this.handleLogout, 
          errorLogin: this.state.errorLogin,
          loaded: this.state.loaded
        }}
      >
      {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export const AuthContextConsumer = AuthContext.Consumer;
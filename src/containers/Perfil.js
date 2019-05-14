import React, { Component } from 'react';
import styled from 'styled-components';
import axios from '../axios';

import Information from '../components/Perfil/Information';

const Div = styled.div`
  padding-top: 56px;
  margin: auto;
`;

class Perfil extends Component {
  state = {
    user: null,
    posts: [],
    loaded: false,
    error: false
  }

  componentDidMount() {
    axios.get(`api/v1/users/${this.props.match.params.nickname}`)
      .then(response => {
        this.setState({
          user: response.data,
          loaded: true
        });
        this.loadPosts(response.data.id);
      })
      .catch(error => {
        if (!error.response) {
          this.setState({
            errorMessage: 'Hubo un problema. Intenta más tarde.',
            loaded: true
          })
        }
        else if (error.response.status === 404) {
          this.setState({
            errorMessage: 'El usuario no existe.',
            loaded: true
          });
        }
        else {
          this.setState({
            errorMessage: 'Error desconocido.',
            loaded: true
          })
        }
      });
  }

  loadPosts = (id) => {
    axios.get(`api/v1/users/${id}/posts`)
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  }

  render() {
    console.log(this.state.user);
    console.log(this.state.posts);
    return (
      <Div>
        {
          this.state.loaded && this.state.user ?
          <Information user={this.state.user} />
          : null
        }
      </Div>
    )
  }
}

export default Perfil;

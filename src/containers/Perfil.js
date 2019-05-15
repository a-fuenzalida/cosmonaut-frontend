import React, { Component } from 'react';
import styled from 'styled-components';
import axios from '../axios';

import Card from '../components/UI/Card';
import Information from '../components/Perfil/Information';
import ListaPosts from '../components/Perfil/ListaPosts';

const Div = styled.div`
  margin: 0 auto 30px;
  padding-top: 56px;
  max-width: 900px;
  width: 100%;
`;

class Perfil extends Component {
  state = {
    user: null,
    posts: [],
    loadedUser: false,
    loadedPosts: false,
    errorUser: null,
    errorPost: null
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.nickname !== this.props.match.params.nickname) {
      this.loadUser(this.props.match.params.nickname);
    }
    else {
      return null;
    }
  }

  componentDidMount() {
    this.loadUser(this.props.match.params.nickname);
  }

  loadUser = (nickname) => {
    axios.get(`api/v1/users/${nickname}`)
    .then(response => {
      this.setState({
        user: response.data,
        errorUser: null,
        loadedUser: true
      });
      this.loadPosts(response.data.id);
    })
    .catch(error => {
      if (!error.response) {
        this.setState({
          errorUser: 'Hubo un problema. Intenta más tarde.',
          loadedUser: true
        })
      }
      else if (error.response.status === 404) {
        this.setState({
          errorUser: 'El usuario no existe.',
          loadedUser: true
        });
      }
      else {
        this.setState({
          errorUser: 'Error desconocido.',
          loadedUser: true
        })
      }
    });
  }

  loadPosts = (id) => {
    axios.get(`api/v1/users/${id}/posts`)
      .then(response => {
        this.setState({
          posts: response.data,
          errorPost: null,
          loadedPosts: true
        });
      })
      .catch(error => {
        if (!error.response) {
          this.setState({
            errorPost: 'Hubo un problema. Intenta más tarde.',
            loadedPosts: true
          })
        }
        else {
          this.setState({
            errorPost: 'Error desconocido.',
            loadedPosts: true
          })
        }
      });
  }

  render() {
    let profile = <p>Cargando...</p>;

    if (this.state.user) {
      profile = (
        <>
          <Information user={this.state.user} />
          <ListaPosts posts={this.state.posts} loaded={this.state.loadedPosts} />
        </>
      );
    }

    if (this.state.loadedUser && this.state.errorUser) {
      profile = (
        <Card>
          {this.state.errorUser}
        </Card>
      );
    }

    return (
      <Div>
        {profile}
      </Div>
    )
  }
}

export default Perfil;

import React, { Component } from 'react';
import styled from 'styled-components';
import axios from '../axios';

import { AuthContext } from '../context/AuthContext';

import Card from '../components/UI/Card';
import Information from '../components/Perfil/Information';
import ListaPosts from '../components/Perfil/ListaPosts';
import ProgressBar from '../components/UI/ProgressBar';

const Div = styled.div`
  padding-top: 56px;
`;

const Container = styled.div`
  width: 100%;
  margin: 0 auto 30px;
  max-width: 900px;
`;

class Perfil extends Component {
  static contextType = AuthContext;

  state = {
    user: null,
    followers: [],
    followings: [],
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
      this.loadFollowings(response.data.id);
      this.loadFollowers(response.data.id);
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

  loadFollowings = (id) => {
    axios.get(`api/v1/users/${id}/followings`)
      .then(response => {
        console.log(response.data);
        this.setState({
          followings: response.data
        });
      });
  }

  loadFollowers = (id) => {
    axios.get(`api/v1/users/${id}/followers`)
      .then(response => {
        console.log(response.data);
        this.setState({
          followers: response.data
        });
      });
  }

  render() {
    let profile = <ProgressBar />;

    if (this.state.user) {
      profile = (
        <Container>
          <Information user={this.state.user} />
          <ListaPosts posts={this.state.posts} loaded={this.state.loadedPosts} />
        </Container>
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

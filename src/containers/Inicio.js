import React, { Component } from 'react';
import axios from '../axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import ProgressBar from '../components/UI/ProgressBar';
import Card from '../components/UI/Card';
import Post from '../components/Post/Post';

const Div = styled.div`
  padding-top: 56px;
  margin: auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FF746A;
`;

class Inicio extends Component {
  state = {
    posts: [],
    error: false,
    loaded: false
  }

  componentDidMount() {
    axios.get('api/v1/posts')
      .then(response => {
        this.setState({
          posts: response.data,
          error: false,
          loaded: true
        })
      })
      .catch(error => {
        this.setState({
          error: true,
          loaded: true
        });
      });
  }

  componentWillUnmount() {
    this.setState({
      loaded: false
    });
  }

  render() {
    let posts = <ProgressBar />;

    if (this.state.posts.length > 0) {
      posts = (
        <>
          <Card>
            Estás viendo las últimas 10 publicaciones.<br/>
            Para ver más <StyledLink to="/ingresar">ingresa aquí.</StyledLink>
          </Card>
          {
            this.state.posts.map(post => (
              <Post key={post.id} post={post}/>
            ))
          }
        </>
      );
    }
    else if (this.state.posts.length <= 0 && this.state.loaded && !this.state.error) {
      posts = (
        <Card>
          No hay ninguna publicación para mostrar.
        </Card>
      );
    }
    else if (this.state.error) {
      posts = (
        <Card>
          Hubo un problema al intentar cargar las publicaciones.
        </Card>
      );
    }

    return (
      <Div>
        {posts}
      </Div>
    )
  }
}

export default Inicio;
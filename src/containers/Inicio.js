import React, { Component } from 'react';
import axios from '../axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    error: false
  }

  componentDidMount() {
    axios.get('api/v1/posts')
      .then(response => {
        this.setState({
          posts: response.data
        })
      })
      .catch(error => {
        this.setState({
          error: true
        });
      });
  }

  render() {
    return (
      <Div>
        <Card>
          Estás viendo las últimas 10 publicaciones.<br/>
          Para ver más <StyledLink to="/ingresar">ingresa aquí.</StyledLink>
        </Card>
        {
          this.state.posts.map(post => (
            <Post key={post.id} post={post}/>
          ))
        }
      </Div>
    )
  }
}

export default Inicio;
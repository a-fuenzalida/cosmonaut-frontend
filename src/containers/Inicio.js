import React, { Component } from 'react';
import axios from '../axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Post from '../components/Post/Post';

const Div = styled.div`
  padding-top: 56px;
  margin: auto;
`;

const Card = styled.div`
  text-align: center;
  font-family: 'Quicksand';
  font-size: 15px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.5);
  width: 500px;

  @media (max-width: 600px) {
    width: 80%;
  }

  & button {
    cursor: pointer;
    text-decoration: none;
    border: none;
    color: red;
    background-color: transparent;
    font-family: inherit;
    font-size: inherit;
    padding: 0;
    margin: 0;
  }
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
          Para ver más <Link to="/ingresar"><button>ingresa aquí.</button></Link>
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
import React from 'react';
import styled from 'styled-components';

import CardWarning from '../UI/Card';

const Lista = styled.div`
  width: 100%;
  margin: 10px auto;
`;

const Cards = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
`;

const Img = styled.img`
  margin: 8px 10px;
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: .5em;

  @media (max-width: 900px) {
    width: 200px;
    height: 200px;
  }

  @media (max-width: 680px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 527px) {
    margin: 1px;
    width: 130px;
    height: 130px;
  }

  @media (max-width: 405px) {
    margin: 1px;
    width: 100px;
    height: 100px;
  }
`;

const ListaPosts = (props) => {
  let posts = <p>Cargando</p>;

  if (props.posts.length <= 0 && props.loaded) {
    posts = (
      <CardWarning>
        Este usuario no ha publicado nada aún.
      </CardWarning>
    );
  }

  if (props.posts.length > 0) {
    posts = (
      <Cards>
        {
          props.posts.map(post => (
            <Img key={post.id} src={process.env.REACT_APP_API_URL + post.image.url} />
          ))
        }
      </Cards>
    );
  }

  return (
    <Lista>
      {posts}
    </Lista>
  )
}

export default ListaPosts;
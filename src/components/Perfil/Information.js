import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  height: 125px;
  padding: 30px 15%;
  background-color: #FFFFFF;
  border-bottom: 1px solid #CFC8C4;
  border-radius .2em;

  @media (max-width: 700px) {
    padding: 30px 20px;
  }
`;

const Img = styled.img`
  float: left;
  width: 125px;
  height: 125px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 20px;
`;

const Information = (props) => {
  return (
    <Header>
      <Img src={process.env.REACT_APP_API_URL + props.user.picture.url} />
      <strong>{props.user.name}</strong>
    </Header>
  )
}

export default Information;

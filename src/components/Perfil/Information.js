import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-flow: row wrap;
  align-content: flex-end;
  justify-content: center;
  padding: 30px 5%;
  background-color: #FFFFFF;
  border-bottom: 1px solid #CFC8C4;
  border-bottom-left-radius: .5em;
  border-bottom-right-radius: .5em;

  @media (max-width: 900px) {
    padding: 30px 20px;
    border-radius: 0;
  }
`;

const Img = styled.img`
  width: 125px;
  height: 125px;
  object-fit: cover;
  margin-right: 20px;

  @media (max-width: 700px) {
    width: 90px;
    height: 90px;
    margin-right: 10px;
  }
`;

const Nombre = styled.strong`
  font-weight: bold;
  margin-right: 10px;
  margin-bottom: 0;
`;

const Follow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const Button = styled.button`
  width: 125px;
  font-family: 'Quicksand', sans-serif;
  padding: 6px 12px;
  cursor: pointer;
  font-size: .8rem;
  text-decoration: none;
  display: inline-block;
  touch-action: manipulation;
  background-color: #FF746A;
  color: #FFF;
  border: 1px solid transparent;

  &:hover,
  &:focus,
  &:active {
    background-color: #FF746A;
    box-shadow: 0px 0px 7px #FF746A;
  }

  @media (max-width: 700px) {
    width: 90px;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3 0 0;
`;

const FollowInfo = styled.div`
  display: flex;
  flex: 1 0 0;
  width: 100%;

  @media (max-width: 700px) {
    margin: 20px 20px 0;
    display: block;
    width: 100%;
    flex: none;
  }

  & div {
    border: 1px solid rgba(0, 0, 0, 0.1);
    width: 100%;
    border-radius: 5px;
    padding: 10px;
  }
`;

const Information = (props) => {
  return (
    <Header>
      <Follow>
        <Img src={process.env.REACT_APP_API_URL + props.user.picture.url} />
        <Button><i className="fas fa-star"></i> Seguir</Button>
      </Follow>
      <Description>
        <Nombre>{props.user.name}</Nombre>
        @{props.user.nickname}
        <p>
          {props.user.description}
        </p>
      </Description>
      <FollowInfo>
        <div>
          Hola
        </div>
      </FollowInfo>
    </Header>
  )
}

export default Information;

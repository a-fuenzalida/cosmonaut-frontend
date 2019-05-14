import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #FFFFFF;
  box-shadow: 2px 2px 5px #CFC8C4;
  font-size: 14px;
  color: #424140;
  width: 600px;
  margin: 50px auto;
  border: 1px solid #CFC8C4;
  border-radius: .5em;

  @media (max-width: 700px) {
    width: 99%;
  }

  & header {
    height: 50px;
    padding: 15px;
  }
`;

const Img = styled.img`
  object-fit: cover;
  width: 100%;
`;

const UserImg = styled.img`
  float: left;
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;

const Footer = styled.footer`
  padding: 10px 15px;

  & i {
    color: #CFC8C4;
    font-size: 25px;
  }
`;

const Description = styled.p`
  margin: 10px 0;
`;

const Tag = styled.a`
  text-decoration: none;
  color: #FF746A;
`;

const Hr = styled.hr`
  width: 100%;
  color: #CFC8C4;
  border: 0.5px solid #CFC8C4;
  margin: 0;
`;

const DateTime = styled.footer`
  font-size: 12px;
  padding: 10px;
`;

const Post = (props) => {
  const createdAt = new Date(props.post.created_at);
  const date = `${createdAt.getDate()}/${createdAt.getMonth()+1}/${createdAt.getFullYear()} ${createdAt.getHours()}:${createdAt.getMinutes() < 10 ? "0" + createdAt.getMinutes() : createdAt.getMinutes()}`
  let description = props.post.description.split(" ");

  return (
    <Card>
      <header>
        <UserImg src={process.env.REACT_APP_API_URL + "images/user/" + props.post.picture}/>
        <strong>{props.post.name}</strong><br />
        @{props.post.nickname}
      </header>
      <div>
        <Img src={process.env.REACT_APP_API_URL + props.post.image.url}/>
      </div>
      <Footer>
        <i className="fas fa-heart"></i>
        <Description>
          {
            description.map((d, i) => (
              /#(\w+)/g.test(d) ? <Tag key={i} href="#"> {d}</Tag> : <span key={i}> {d}</span>
            ))
          }
        </Description>
      </Footer>
      <Hr />
      <DateTime>
        Fecha de publicación: {date.toString()}
      </DateTime>
    </Card>
  )
}

export default Post;
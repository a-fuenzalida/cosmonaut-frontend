import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
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
`;

const Card = (props) => {
  return (
    <StyledCard>
      {props.children}
    </StyledCard>
  )
}

export default Card;
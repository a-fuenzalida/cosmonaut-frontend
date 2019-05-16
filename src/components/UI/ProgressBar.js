import React from 'react';
import styled from 'styled-components';

const StyledBar = styled.div`
  padding: 0 !important;
  margin: 0 !important;
  max-width: 100% !important;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 3px;
  background: linear-gradient(270deg, #ff746a, #fae5e1);
  background-size: 400% 400%;

  animation: AnimationName 2s ease infinite;

  @-webkit-keyframes AnimationName {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
  @-moz-keyframes AnimationName {
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
  @keyframes AnimationName { 
      0%{background-position:0% 50%}
      50%{background-position:100% 50%}
      100%{background-position:0% 50%}
  }
`;

const ProgressBar = () => {
  return (
    <StyledBar />
  )
}

export default ProgressBar

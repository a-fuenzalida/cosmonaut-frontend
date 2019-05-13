import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

const StyledHeader = styled.header`
  filter: inherit;
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <Nav />
    </StyledHeader>
  )
}

export default Header;
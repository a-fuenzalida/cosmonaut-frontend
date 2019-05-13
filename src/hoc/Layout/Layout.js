import React, { Component } from 'react';
import styled from 'styled-components';

import Header from '../../components/Layout/Header';

const Main = styled.main`
  height: 100%;
`;

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Main>
          {this.props.children}
        </Main>
      </div>
    )
  }
}

export default Layout;
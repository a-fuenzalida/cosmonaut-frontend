import React, { Component } from 'react';

import { AuthContextProvider } from './context/AuthContext';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <AuthContextProvider>
        <Routes />
      </AuthContextProvider>
    );
  }
}

export default App;

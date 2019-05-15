import React, { Component } from 'react';
import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';

import Layout from './hoc/Layout/Layout';
import Ingresar from './containers/Ingresar';
import Inicio from './containers/Inicio';
import Feed from './containers/Feed';
import Registrar from './containers/Registrar';
import Perfil from './containers/Perfil';

class Routes extends Component {
  static contextType = AuthContext;

  render() {
    const value = this.context;
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact render={() => (
              value.user || localStorage.uid ? (
                <Feed/>
              ) : (
                <Inicio/>
              )
            )} />
            <Route exact path="/ingresar" render={() => (
              value.user || localStorage.uid ? (
                <Redirect to="/"/>
              ) : (
                <Ingresar/>
              )
            )}/>
            <Route exact path="/registrar" render={() => (
              value.user || localStorage.uid ? (
                <Redirect to="/"/>
              ) : (
                <Registrar/>
              )
            )}/>
            <Route exact path="/:nickname" component={Perfil} />
            {/* 
            <Route path="/subir" component={Subir} />
            <Route path="/buscar" component={Buscar} />*/}
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

export default Routes;
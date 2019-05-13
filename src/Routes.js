import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';

import Layout from './hoc/Layout/Layout';
import Ingresar from './containers/Ingresar';
import Inicio from './containers/Inicio';
import Feed from './containers/Feed';

class Routes extends Component {
  static contextType = AuthContext;

  render() {
    const value = this.context;

    let routes = null;

    if (value.user || localStorage.uid) {
      routes = (
        <Switch>
          <Route path="/" exact component={Feed} /> 
          {/* <Route path="/:username" component={Perfil} />
          <Route path="/subir" component={Subir} />
          <Route path="/buscar" component={Buscar} />*/}
        </Switch>
      );
    }
    else {
      routes = (
        <Switch>
          <Route path="/ingresar" component={Ingresar} />
          <Route path="/" exact component={Inicio} /> 
          {/* <Route path="/registro" component={Registro} />
          <Route path="/:username" component={Perfil} />
          */}
        </Switch>
      );
    }

    return (
      <BrowserRouter>
        <Layout>
          {routes}
        </Layout>
      </BrowserRouter>
    )
  }
}

export default Routes;
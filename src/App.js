import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Produtos from './pages/Produtos';
import ProdDetalhe from './pages/ProdDetalhe';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login}></Route>
        <Route path='/produtos' exact={true} component={Produtos}></Route>
        <Route path='/produtos/:id'exact={true} component={ProdDetalhe}></Route>
      </Switch>
     </BrowserRouter>
    );
  }
}

export default App;

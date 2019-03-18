import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login';
import Produtos from './pages/Produtos';

class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login}></Route>
        <Route path='/produtos' component={Produtos}></Route>
      </Switch>
     </BrowserRouter>
    );
  }
}

export default App;

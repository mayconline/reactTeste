import React, { Component, Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import GlobalStyle from './Styles/global';

import Login from './pages/Login';
import Produtos from './pages/Produtos';
import ProdDetalhe from './pages/ProdDetalhe';
import ProdCadastro from './pages/ProdCadastro';
import Main from './pages/Main';



class App extends Component {
  render() {
    return (
      <Fragment>
      <GlobalStyle/>
     <BrowserRouter>
      <Switch>
        <Route path="/admin/login" exact={true} component={Login}></Route>
        <Route path='/admin/produtos/cadastro' exact={true} component={ProdCadastro}></Route>
        <Route path='/admin/produtos' exact={true} component={Produtos}></Route>
        
        
        <Route path='/produtos' exact={true} component={Produtos}></Route>
        <Route path='/' exact={true} component={Main}></Route>
        <Route path='/produtos/:id'exact={true} component={ProdDetalhe}></Route>
       
      
      </Switch>
     </BrowserRouter>

     </Fragment>
    );
  }
}

export default App;

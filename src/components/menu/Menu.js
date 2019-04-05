import React, {Component, Fragment} from 'react';
import {MenuJSS} from './MenuJSS';
import{Link} from 'react-router-dom';

export default class Menu extends Component {
  render(){
      return(
            <Fragment>
        <MenuJSS>
        <header>ProdSite</header>     
        <ul>
            <li><Link to="/">Login</Link></li>
            <li><Link to="/produtos">Produtos</Link></li>
            <li><Link to="/produtos/cadastro">Cadastrar</Link></li>     
               
        </ul>
        </MenuJSS>
            </Fragment>
        
      )
      }
    }
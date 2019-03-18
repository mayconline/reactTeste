import React, {Component} from 'react';

import {Link} from 'react-router-dom';
import api from '../services/api';

import Prod from '../components/Prod';

export default class Produtos extends Component {
    state={
        newProduct:'',
        listaProd:[]
    };

    async componentDidMount(){
        const response = await api.get('/produtos');
       // console.log(response.data)
       this.setState({listaProd: response.data})
    };

    handleInputChange = (e) =>{
        this.setState({newProduct: e.target.value})
    };

    handleSubmit =(e)=>{
       e.preventDefault();
       const produto = this.state.newProduct;
       const usuario = localStorage.getItem('@rjs:username');

       console.log(produto, usuario);
    };
    
    render(){
        return (
              <div>
                  <form onSubmit={this.handleSubmit}>
                      <textarea
                        value={this.state.newProduct}
                        onChange ={this.handleInputChange}
                        placeholder="Digite o Produto"                      
                      />
                      <button type="submit">Cadastrar Produto</button>
                  </form>
            <Link to="/">Clique para Voltar</Link>

                <br></br>

                {this.state.listaProd.map(prod => ( 
                <Prod key={prod._id} prod={prod}/>
                
                ))}
                
           
              </div>
        );
    }
}
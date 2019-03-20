import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';

import api from '../services/api';

import Prod from '../components/Prod';
import InputForm from '../components/InputForm';

export default class Produtos extends Component {
    state={
        titulo:'',
        descricao:'',
        valor:'',
        listaProd:[]
    };

    async componentDidMount(){
        const response = await api.get('/produtos');
     
       this.setState({listaProd: response.data})
    };


    handleTituloChange = (e) =>{
        this.setState({titulo: e.target.value})
    };

    handleDescricaoChange =(e)=>{
        this.setState({descricao:e.target.value})
    };

    handleValorChange = (e) =>{
        this.setState({valor:e.target.value})
    };



    handleSubmit = async (e)=>{
       e.preventDefault();

      const obj =  await {
        titulo: this.state.titulo,
        descricao:this.state.descricao,
        valor:this.state.valor
       };

     
      await api.post('/produtos', obj);
      
       this.setState({
           titulo:'',
           descricao:'',
           valor:''
       })
       
    
    };
    
   listagemTela = ()=>{
        
     return  this.state.listaProd.map(prod => ( 
            <Fragment key={prod._id}>
            <Prod prod={prod}/>
            <Link to={`/produtos/${prod._id}`}>Selecionar</Link>
            </Fragment>
            ))
    };

    render(){
        return (
           
              <div>
                  <form onSubmit={this.handleSubmit}>
                    
                    <InputForm 
                        label="Titulo"
                        id = "titulo"
                        type="text"
                        name="titulo"
                        value={this.state.titulo}
                        onChange={this.handleTituloChange}
                        placeholder="Digite um Titulo"
                    />
                    <InputForm 
                        label="Descrição"
                        id = "descricao"
                        type="text"
                        name="descricao"
                        value={this.state.descricao}
                        onChange={this.handleDescricaoChange}
                        placeholder="Digite uma descrição"
                    />
                    <InputForm 
                        label="Valor"
                        id = "valor"
                        type="number"
                        name="valor"
                        value={this.state.valor}
                        onChange={this.handleValorChange}
                        placeholder="Digite um valor"
                    /> 


                      <button type="submit">Cadastrar Produto</button>
                  </form>
           

                <br></br>
              
              {this.listagemTela()}

            
              
              </div>
            
        );
    }
}
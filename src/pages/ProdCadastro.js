import React, {Component, Fragment} from 'react';
import api from '../services/api';
import InputForm from '../components/InputForm';

import Menu from './Menu';


export default class ProdCadastro extends Component {

    state={
        titulo:'',
        descricao:'',
        valor:'',
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

     
     const res = await api.post('/produtos/cadastro', obj);
      
       this.setState({
           titulo:'',
           descricao:'',
           valor:''
       })

       await this.props.history.push(`/produtos/${res.data._id}`);
       
    
    };

    render(){
        return(
            <Fragment>
              <Menu />                   
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
     
     
            </Fragment>
  
      
          
            
            )
    }
}

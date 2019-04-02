import React, {Component, Fragment} from 'react';

import api from '../services/api';
import socket from 'socket.io-client';

import ListaProd from '../components/ListaProd';
import InputForm from '../components/InputForm';

export default class Produtos extends Component {
    state={
        titulo:'',
        descricao:'',
        valor:'',
        listaProd:[],
        userId:''
        
    
    };

    async componentDidMount(){
        this.subscribeSocket();

        const response = await api.get('/produtos');
     
       this.setState({listaProd: response.data})
    };

    async componentWillUnmount(){
        this.unsubscribeSocket();
    }

    unsubscribeSocket =()=>{
        const io = socket('http://localhost:3000');
        io.off('cadastro');
        
    };

    subscribeSocket =()=>{
        const io = socket('http://localhost:3000');

        io.on('cadastro', data =>{
            this.setState({listaProd:[data, ...this.state.listaProd]});
        })
       
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

     
      await api.post('/produtos/cadastro', obj);
      
       this.setState({
           titulo:'',
           descricao:'',
           valor:''
       })
       
    
    };
    
   listagemTela = ()=>{
        
     return  this.state.listaProd.map(prod => ( 
            <Fragment key={prod._id}>
            <ListaProd prod={prod}
            type="button" 
            onClick1={this.DetalharProd} 
            value1={prod._id}
            textButton1="Selecionar"
            bt1bgcolor="#009933"
            bt1txtcolor="#ffffff"
            bt2="none"
            />
            </Fragment>
            ))
    };


    DetalharProd = async (e) => {
          await  this.setState({userId:e.target.value});
         await this.props.history.push(`/produtos/${this.state.userId}`)
       }


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
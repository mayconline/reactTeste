import React, {Component, Fragment} from 'react';

import api from '../services/api';
import socket from 'socket.io-client';

import ListaProd from '../components/ListaProd';
import Menu from '../components/menu/Menu';



export default class Produtos extends Component {
    state={
        
        listaProd:[],
        prodId:''
 
    };

    async componentDidMount(){
        this.subscribeSocket();

        const token = localStorage.getItem('@userToken')
        const headers ={'authorization':token}
        const response = await api.get('/produtos', {headers});
     
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
          await  this.setState({prodId:e.target.value});
         await this.props.history.push(`/produtos/${this.state.prodId}`)
       }


    render(){
        
        return (
            <Fragment>
                <Menu/>
         
                 {this.listagemTela()}
                
            </Fragment>    
        );
    }
}
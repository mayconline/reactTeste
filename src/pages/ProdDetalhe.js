import React, {Component, Fragment} from 'react';
import api from '../services/api';


import ListaProd from '../components/ListaProd';
import {ProdDetalheJSS} from '../components/ProdDetalheJSS';

export default class ProdDetalhe extends Component {

    state ={
        produto:{}
        
    }

    async componentDidMount(){
        const {id} = this.props.match.params;
     

        const response = await api.get(`/produtos/${id}`);
       
        
        this.setState({ produto: response.data});

    }

    deletarProd = async ()=>{
      
        const {_id} = this.state.produto;
       
        try{
            await api.delete(`/produtos/${_id}`);
         
            this.props.history.push('/produtos');  
            alert('deletado com sucesso');
        }  
        catch{
            alert('erro ao deletar')
        }
        
        
    }

    EditarProd = async ()=>{
      
        const {_id} = this.state.produto;
       
        try{
            
         console.log(_id)
           //this.props.history.push('/produtos');  
           // alert('deletado com sucesso');
        }  
        catch{
           // alert('erro ao deletar')
        }
        
        
    }

    render(){

        const {produto} = this.state;
        return(


            <Fragment>

<ProdDetalheJSS>
         
         <ListaProd 
             prod={produto}
             type1="button" 
             type2="button"
             onClick1={this.deletarProd}
             onClick2={this.EditarProd}
             textButton1="Deletar"
             textButton2="Editar"

             bt1bgcolor="#ff0000"
             bt2bgcolor="#0040ff"
             
             bt1txtcolor="#ffffff"
             bt2txtcolor="#ffffff"
             
         
         />
     
     
         </ProdDetalheJSS>
            </Fragment>
           
        
        );
    }
}
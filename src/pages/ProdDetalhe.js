import React, {Component} from 'react';
import api from '../services/api';


import Prod from '../components/Prod';

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

    render(){

        const {produto} = this.state;
        return(
            <div>
            <Prod prod={produto}/>
            <button type="button" onClick={this.deletarProd}>deletar</button>
            </div>
        
        );
    }
}
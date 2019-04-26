import React, {Component, Fragment} from 'react';
import api from '../services/api';

import Dropzone from 'react-dropzone'

import ListaProd from '../components/ListaProd';


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

    inserirFoto = async (files) =>{
        const {_id} = this.state.produto;

        for( let file of files){

            //cria um formulario
            const data = new FormData();
            data.append('file', file)
            //envia os dados para a url

     await api.post(`/produtos/cadastro/${_id}/fotos`, data)
       

        }
     
    }
  

    render(){
        
        
        const {produto} = this.state;
   
        return(


            <Fragment>

           <Dropzone onDropAccepted={this.inserirFoto}>
                 {({getRootProps, getInputProps})=>(
                     <div className='upload'{...getRootProps()}>
                        <input {...getInputProps()}/>
                        <p>Arraste arquivos aqui</p>
                     </div>
                 )}  
            </Dropzone> 

         
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
     
    
     
      
            </Fragment>
           
        
        );
    }
}
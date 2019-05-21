import React, {Component, Fragment} from 'react';
import api from '../../services/api';
import InputForm from '../../components/InputForm';

import Menu from '../Menu';
import ProdPreview from '../../components/ProdPreview';

import {Container, Row, Col} from '../../components/GridJSS';
import {Card, Loading} from './styled';

import ReactLoading from 'react-loading';



export default class ProdCadastro extends Component {

    state={
        titulo:'',
        descricao:'',
        valor:'',
        listaProd:[],
        loading:false
    };

    async componentDidMount(){
       

        const token = localStorage.getItem('@userToken')
        const headers ={'authorization':token}
        const response = await api.get('/produtos', {headers});
     
       this.setState({listaProd: response.data})
       
    };

    deletarProduto = async (_id)=>{
        
        await  this.setState({loading:true});
       
        try{
            await api.delete(`/produtos/${_id}`);

            await this.setState({loading:false});
         
            /* await  this.props.history.push('/admin/produtos/cadastro');  */
            window.location.reload();        

            
        }  
        catch{
          

         await   this.setState({loading:false});
        }
    }

    
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

                      {this.state.loading && (
                   
                   <Loading>
                        <ReactLoading type='bars' color='#f00' height={'10rem'} width={'10rem'} />    
                   </Loading>
                   
               )} 
                   
            <Container>
                <Row>
                
                    <Col col='6'>
                        <Card>
       
                        <form onSubmit={this.handleSubmit}>

                     
                        <h3>CADASTRAR PRODUTOS</h3>
              
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


                <button type="submit">CADASTRAR</button>

              
            </form>
     
     

                        </Card>
                 

                    </Col>

                    <Col col='6'>
                     <Card>
                     <h3>PRODUTOS CADASTRADOS</h3>
                     <ProdPreview produtos={this.state.listaProd}
                        deletar={this.deletarProduto}
                     />
                     </Card>      
                    </Col>
                </Row>
             

             

         
            </Container>

            </Fragment>
  
      
          
            
            )
    }
}

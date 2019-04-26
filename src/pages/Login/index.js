import React, {Component, Fragment} from 'react';

import logo from '../../img/logo.svg';

import InputForm from '../../components/InputForm';
//import {Button} from '../components/ButtonJSS';
//import {Card, CardHeader, CardFooter, CardContent} from '../components/CardJSS';

import api from '../../services/api';

import {LoginForm} from './styled';


export default class Login extends Component {
  
  state ={
  
    usuario:'',
    senha:'',
    msgErro:''
    

  };
  
 
  handleUsuarioChange = (e) => {
    this.setState({ usuario: e.target.value});
};
handleSenhaChange = (e) => {
  this.setState({ senha: e.target.value});
};

setMsgErro =(e) =>{
  this.setState({msgErro:e})
}



  handleSubmit = async (e)=>{
    e.preventDefault();

    const {usuario, senha} = this.state;
    
    if(!usuario.length || !senha.length) return;

    try {

      const obj = await {usuario,senha}

      const response = await api.post('/usuarios/login', obj);
  
      await localStorage.setItem('@userToken', response.data.jwtToken);
  
      const logado = await localStorage.getItem('@userToken')
  
  
      if(!logado) {
        return ;
      } else this.props.history.push('produtos');

      
    }
    catch(e){
      this.setMsgErro('Erro ao logar')
     
    }

  };


 

    render(){

     
       return(
         <Fragment>               
    <LoginForm>     
        <form onSubmit={this.handleSubmit}>

        <div className="img-logo">
      <img src={logo} alt="logo" height={100} width={100}/>
      </div>

                   <InputForm 
                    label ="Usuario"
                    id="usuario"
                    type="text"
                    name="usuario"
                    value={this.state.username}
                    onChange={this.handleUsuarioChange}
                    placeholder="Entre com seu usuario"
                   />

                  <InputForm 
                    label ="Senha"
                    id="senha"
                    type="password"
                    name="senha"
                    value={this.state.username}
                    onChange={this.handleSenhaChange}
                    placeholder="Entre com a senha"
                   /> 

              <button
                   
                   type='submit'  
                >
                   Entrar
                   </button>
             </form> 
          <p> {this.state.msgErro}</p>      
    </LoginForm> 
     
         </Fragment>
 
     
     );
    };
}
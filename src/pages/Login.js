import React, {Component} from 'react';

import logo from '../img/logo.svg';

import InputForm from '../components/InputForm';
import {Button} from '../components/ButtonJSS';
import {Card, CardHeader, CardFooter, CardContent} from '../components/CardJSS';

export default class Login extends Component {
  
  state ={
    username:'',
  };
  
  handleInputChange = (e) => {
      this.setState({ username: e.target.value});
  };
  handleSubmit = (e)=>{
    e.preventDefault();

    const {username} = this.state;
    
    if(!username.length) return;

    localStorage.setItem('@rjs:username', username);

    this.props.history.push('produtos');
  };

    render(){
       return(
           <div>
             <form onSubmit={this.handleSubmit}>
             <Card>
              <CardHeader>

              <img src={logo} alt="logo" height={100} width={100}/>
              </CardHeader>
              <CardContent>

              
                   <InputForm 
                    label ="Usuario"
                    id="usuario"
                    type="text"
                    name="usuario"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    placeholder="Entre com seu usuario"
                   />

                  <InputForm 
                    label ="Senha"
                    id="senha"
                    type="password"
                    name="senha"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    placeholder="Entre com a senha"
                   /> 

                   
                                   
               
              </CardContent>
              <CardFooter>
              <Button
                   bt1bgcolor='blue'
                   bt1txtcolor='white'
                   type='submit'  
                >
                   Entrar
                   </Button>
                   
              
              </CardFooter>

             </Card>

             </form>
                
          </div>
       );
    };
}
import React, {Component} from 'react';

import logo from '../img/logo.svg';

import InputForm from '../components/InputForm';

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
               <img src={logo} alt="logo" height={100} width={100}/>
                <form onSubmit={this.handleSubmit}>
                   <InputForm 
                    label ="Usuario"
                    id="usuario"
                    type="text"
                    name="usuario"
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    placeholder="Entre com seu usuario"
                   />
                   
                    <button type="submit">Entrar</button>                
                </form>
          </div>
       );
    };
}
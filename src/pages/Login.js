import React, {Component} from 'react';

import logo from '../img/logo.svg';

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

    this.props.history.push('Produtos');
  };

    render(){
       return(
           <div>
               <img src={logo} alt="logo" height={100} width={100}/>
                <form onSubmit={this.handleSubmit}>
                    <label>Nome Usuario: </label>
                    <input 
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    placeholder="Digite Usuario"
                    />
                    <button type="submit">Entrar</button>                
                </form>
          </div>
       );
    };
}
import React, {Component} from 'react';



export default class Prod extends Component{
   
    render(){

        const {titulo, descricao, valor, createDate} = this.props.prod;

        return (
            <div>
               
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <h1>{valor}</h1>
              
                <span>{createDate}</span>
        
            
            </div>
        )
    }
}
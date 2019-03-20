import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Prod extends Component{
    

    
    render(){

        const {titulo, valor, _id} = this.props.prod;

        return (
            <div>
               
                <h1>{titulo}</h1>
                <h1>{valor}</h1>
        <Link to={`/produtos/${_id}`}>Selecionar</Link>
            
            </div>
        )
    }
}
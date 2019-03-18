import React, {Component} from 'react';

export default class Prod extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.prod.titulo}</h1>
                <h1>{this.props.prod.valor}</h1>
            </div>
        )
    }
}
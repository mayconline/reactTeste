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

    render(){

        const {produto} = this.state;
        return(
            <div>
              <Prod prod={produto}/>
            </div>
        
        );
    }
}
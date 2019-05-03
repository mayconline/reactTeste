import React, {Component, Fragment} from 'react';

import SlideIntro from '../../components/SlideIntro';
import Jumbotron from '../../components/Jumbotron';

import Menu from '../Menu';
import api from '../../services/api';

export default class Main extends Component {

    state={
        fotos:[]
    }

   async componentDidMount(){
        const response = await api.get('/produtos/fotos');

        this.setState({ fotos: response.data})
    }

    render(){

        return(
        <Fragment>
            <Menu/>
            <Jumbotron/>
            <SlideIntro fotos={this.state.fotos}/>
        </Fragment>
        
        
        )
    }
}
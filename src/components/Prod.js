import React, {Component} from 'react';
import {Container,Row,Col} from './Grid';
import {Card, CardHeader, CardContent, CardFooter} from './Card';


export default class Prod extends Component{
   
    render(){

        const {titulo, descricao, valor, createDate} = this.props.prod;
        const {type, onClick, textButton} = this.props;

        return (
            <Container>
                <Row>
                    <Col col='12'> 
                        <Card>
                            <CardHeader>
                                {titulo} <span>{createDate}</span> 
                            </CardHeader>
                            <CardContent>
                                <p>descricao: {descricao}</p>
                                <p>Valor: {valor} </p>   
                            </CardContent>
                            <CardFooter>
                               <button 
                                    type={type}
                                    onClick={onClick}
                                >{textButton}</button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}


/*<div>
               
                <h1>{titulo}</h1>
                <p>{descricao}</p>
                <h1>{valor}</h1>
              
                <span>{createDate}</span>
        
            
            </div>*/
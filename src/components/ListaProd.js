import React, {Component} from 'react';

import {Card, CardHeader, CardContent, CardFooter} from './CardJSS';
import {Button} from './ButtonJSS';

import {distanceInWords} from 'date-fns';
import pt from 'date-fns/locale/pt';

export default class Prod extends Component{
   

   /* listagemTela = ()=>{
        return this.props.prod.fotos.map(foto =>(
            foto.url
        ))
   };*/


    render(){
           
        const {titulo, descricao, valor, createdAt, fotos} = this.props.prod;
        const { type1,type2,
                onClick1, onClick2,
                textButton1, textButton2, 
                value1, value2,
                bt1bgcolor, bt1txtcolor,
                bt2bgcolor, bt2txtcolor, 
                bt1, bt2} = this.props

            
           
                

        return (
      
                        <Card>
                            <CardHeader>
                            <h1>{titulo}</h1>

                                                       
                            <span> Há {distanceInWords(createdAt, new Date(), {locale:pt})} </span>
                               
                            </CardHeader>
                            <CardContent>
                                   

                              {fotos &&
                                    fotos.map(foto => (
                                        <ul key={foto._id}>
                                            <li >
                                            <img  src={ foto.url} alt={foto.name} width={300}></img> 
                                            </li>

                                        </ul>
                                      
                                    ))
                                        
                                        }  
              
                            
                         
                            </CardContent>
                            <CardFooter>

                            <p>descricao: {descricao}</p>
                                <p>Valor: {valor} </p>
                            <Button
                                bt1bgcolor={bt1bgcolor}
                                bt1txtcolor={bt1txtcolor}
                                type={type1}
                                onClick={onClick1}
                                value={value1}
                                bt1={bt1}
                             >
                                {textButton1}
                            </Button>
                            <Button
                                bt2bgcolor={bt2bgcolor}
                                bt2txtcolor={bt2txtcolor}
                                type={type2}
                                onClick={onClick2}
                                value={value2}
                                bt2={bt2}
                                
                             >
                                {textButton2}
                            </Button>
                            </CardFooter>
                        </Card>
                 
                   
                       
        )
    }
}


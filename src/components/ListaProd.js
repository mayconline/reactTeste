import React, {Component, Fragment} from 'react';

import {Card, CardHeader, CardContent, CardFooter, Content, Description} from './CardJSS';

import{MdLink} from 'react-icons/md';
import {Button} from './ButtonJSS';

import {distanceInWords} from 'date-fns';
import pt from 'date-fns/locale/pt';



export default class Prod extends Component{
   

    render(){
           
        const {titulo, descricao, valor, createdAt, } = this.props.prod;
        const { type1,type2,
                onClick1, onClick2,
                textButton1, textButton2, 
                value1, value2,
                bt1bgcolor, bt1txtcolor,
                bt2bgcolor, bt2txtcolor, 
                bt1, bt2, fotos, detalhar} = this.props

  
        return (
                      
          <Fragment>

               
               <Card   >
                            <Content>
  
                            
                            <CardContent>
                        
                                 
                                    
                                    {fotos &&
                                        fotos.map(foto=>(

                                                <figure >
                                                     <img src={foto.url} alt={foto.name} key={foto._id}
                                                     onClick={()=>{detalhar(value1)}}
                                                     />

                                                     <section>
                                                     <figcaption>
                                                        <h3>{titulo}</h3>
                                                        <span> Há {distanceInWords(createdAt, new Date(), {locale:pt})} </span>
                                                     </figcaption>

                                                     <div>
                                                    <a href={foto.url}
                                                         target='_blank'
                                                        rel='noopener noreferrer'
                                                            >
                                                         <MdLink style={{marginRight:8}}  size={24} color='#222'/>
                                                         </a>
                                                    </div>
                                                     

                                                     </section>

                                                </figure>
                                                
                                       
                                    ))}        

                              
                         
                            </CardContent>
                          
                           {/*  <CardFooter>     
                     <Description>
                              
                                <strong>descricao: {descricao}</strong>
                                <span>Valor: {valor} </span>                    
                      </Description>*/}
                     
                            {/*
                              <div>
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
                           </div>
                            </CardFooter>*/} 
                            </Content>
                        </Card>

          </Fragment>
                       
                 
                   
                       
        )
    }
}


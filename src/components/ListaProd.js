import React, {Component} from 'react';

import {Card, CardHeader, CardContent, CardFooter, Content} from './CardJSS';
import {Button} from './ButtonJSS';

import {distanceInWords} from 'date-fns';
import pt from 'date-fns/locale/pt';



import Slider  from 'react-slick';


export default class Prod extends Component{
   

   


    render(){
           
        const {titulo, descricao, valor, createdAt, fotos} = this.props.prod;
        const { type1,type2,
                onClick1, onClick2,
                textButton1, textButton2, 
                value1, value2,
                bt1bgcolor, bt1txtcolor,
                bt2bgcolor, bt2txtcolor, 
                bt1, bt2} = this.props

            
        const settings = {
          
            focusOnSelect: true,
            pauseOnHover: true,
            lazyLoad: true,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
            cssEase: "linear",
                    dots: false,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                        responsive:[
                            {
                                breakpoint: 1024,
                                settings: {
                                  slidesToShow: 2,
                                  slidesToScroll: 1,
                                
                                }
                              },                            
                                 {
                                breakpoint: 480,
                                settings: {
                                  slidesToShow: 1,
                                  slidesToScroll: 1
                                }
                              }
                        ]
                  };    
                

        return (
      
                        <Card>
                            <Content>
  
                            <CardHeader>
                            <h1>{titulo}</h1>

                                                       
                            <span> Há {distanceInWords(createdAt, new Date(), {locale:pt})} </span>
                               
                            </CardHeader>
                            <CardContent>

                                 <Slider {...settings}>
                                    
                                    {fotos &&
                                        fotos.map(foto=>(

                                         
                                                 <img src={foto.url} alt={foto.name} key={foto._id}/>
                                      
                                       
                                    ))}

                                  
                                  

                                </Slider>  

                               {/*   <ul >
                            
                            {fotos &&
                                  fotos.map(foto => (
                                    
                                          <li key={foto._id}>
                                          <img  src={foto.url} alt={foto.name} ></img> 
                                          </li>

                                     
                                    
                                  ))
                                      
                                      }  
                                       </ul>
            
                           */ } 
                              

                          
                         
                            </CardContent>
                            <CardFooter>

                                <div> 
                                <strong>descricao: {descricao}</strong>
                                <span>Valor: {valor} </span>
                                </div>

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
                           
                            </CardFooter>
                            </Content>
                        </Card>
                 
                   
                       
        )
    }
}


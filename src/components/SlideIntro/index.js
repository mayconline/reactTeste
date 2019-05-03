import React, {Component, Fragment} from 'react';
import Slider  from 'react-slick';

import {Header} from './styled';

export default class SlideIntro extends Component {

    render(){

        const{fotos}=this.props
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
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    initialSlide: 0,
                        responsive:[
                            {
                                breakpoint: 1024,
                                settings: {
                                  slidesToShow: 3,
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

        return(

            <Fragment>
                
                 
                <Header>
                  
                 <Slider {...settings}>
                    
                 {fotos &&
                                        fotos.map(foto=>(

                                          <figure>
                                            <img src={foto.url} alt={foto.name} key={foto._id}/>
                                            <figcaption>{foto.name}</figcaption>
                                          </figure>
                                         
                                                 
                                      
                                       
                                    ))}
                 </Slider>
                 </Header>
            </Fragment>
        )
    }
}
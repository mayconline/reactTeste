/*import React, {Component, Fragment} from 'react';

export default class Detectar_mobile extends Component {   



    
        state={
            whatsapp:'',
            whatsappWeb:'https://web.whatsapp.com/send?phone=5521997322497&text=ola',
            whatsappMobile:'https://wa.me/5521997322497?text=Ola'
        }
    
        
        async componentDidMount(){
           
         await this.detectar_mobile(); 
           
        };
    
    
        detectar_mobile = () =>{ 
            if( navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            ){
               return  this.setState({whatsapp:this.state.whatsappMobile})
               
              
             }
            else {
               return  this.setState({whatsapp:this.state.whatsappWeb})
             }
           }


    render(){
        return(
            <Fragment>
            {this.state.whatsapp}
            </Fragment>
                
           
        )
    }

        }
*/

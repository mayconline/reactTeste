import React , {Component, Fragment} from 'react';

import {ModalContainer} from './styled';



export default class Modal extends Component{

    state={
        ModalOpen:false
    }
  

      /*metodo para alterar visibilidade do sidemenu*/

AbrirModal =()=>{
    this.setState((prevState)=>{
      return {ModalOpen:!prevState.ModalOpen};
    })
  };
  
  fecharModal=()=>{
    this.setState({ModalOpen:false});
  };

    render(){
        
        
        let sideClasses=['modalContainer'];
        if(this.state.ModalOpen){
            sideClasses=[' modalContainer open']
        }

        return(
            <Fragment>

            <button onClick={this.AbrirModal}>Abrir modal</button>

                <ModalContainer > 
                    <div className={sideClasses}>

                    <div className='modal'>
                  <button className='fechar' onClick={this.fecharModal}>X</button>
                <h3> Modal</h3>

             
            
              </div>

                    </div>
              
                </ModalContainer>
            </Fragment>
          
        )
    }
}

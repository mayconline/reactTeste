import React, {Component, Fragment} from 'react';

import Toolbar from '../components/Toolbar';
import SideMenu from '../components/SideMenu';
import {Backdrop} from '../components/Backdrop';



export default class Menu extends Component {

state={
  sideMenuOpen:false,
  AdminBarOpen:false
}
  
/*metodo para alterar visibilidade do sidemenu*/

botaoToogleHandler =()=>{
  this.setState((prevState)=>{
    return {sideMenuOpen:!prevState.sideMenuOpen};
  })
};

backdropHandler=()=>{
  this.setState({sideMenuOpen:false});
};



AdminBar = ()=>{
 this.setState((prevState)=>{
    return {AdminBarOpen:!prevState.AdminBarOpen}
    
  })

};




render(){

  /*setando o componente de side menu dentro de uma variavel*/
      
 /*let backdrop;

  if(this.state.sideMenuOpen) {
          
   backdrop=<Backdrop onClick={this.backdropHandler}/>;
     };*/
   
   
      return(
        <Fragment>
        
            <Toolbar sideMenuClick={this.botaoToogleHandler}
              
              AdminOpen={this.AdminBar}
              AdminBarState={this.state.AdminBarOpen}          
            />
           
           
            <SideMenu show={this.state.sideMenuOpen} />
             
             {this.state.sideMenuOpen &&
            <Backdrop onClick={this.backdropHandler}/>
                }
            
        </Fragment>    
      )
      }
 }
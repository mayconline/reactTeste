import React from 'react';
//import './SideMenu.css';
import {SideMenu} from './styled'
import{Link} from 'react-router-dom';


const sideMenu = props =>{

        let sideClasses=['side_menu'];
        if(props.show){
            sideClasses=['side_menu open']
        }
    return(
<SideMenu>
    <nav>
            <div className={sideClasses}>
        <ul >
            <li><Link to="/" >Login</Link></li>
            <li><Link to="/produtos" >Produtos</Link></li>
            <li><Link to="/produtos/cadastro">Cadastrar</Link></li> 
        </ul>
            </div>
    </nav>
</SideMenu>     
    )
}

   
    

export default sideMenu;
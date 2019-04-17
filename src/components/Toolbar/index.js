import React from 'react';
import{Link} from 'react-router-dom';

import BotaoToogle from '../ToogleButton';
import {Header} from './styled';

 
const Toolbar = props =>(
    <Header> 
        <nav className='toolbar_navigation'>
            <div className='toolbar_toogle_button'>
                <BotaoToogle click={props.sideMenuClick}/>
            </div>
            <div className='toolbar_logo'><Link to="/" >Logo</Link></div>
            <div className='spacer' />
            <div className='toolbar_navigation_item'>
                <ul>
                <li><Link to="/" >Login</Link></li>
                <li><Link to="/produtos" >Produtos</Link></li>
                <li><Link to="/produtos/cadastro">Cadastrar</Link></li> 
                </ul>
            </div>
        </nav>
    </Header>
);

export default Toolbar;
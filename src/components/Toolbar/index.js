import React from 'react';
import{Link} from 'react-router-dom';

import BotaoToogle from '../ToogleButton';
import {Header} from './styled';


import { FaBirthdayCake, FaKey ,FaMapMarkedAlt,
     FaTools, FaRegAddressCard, FaRegCommentDots,
     FaSearch} from "react-icons/fa";
 
const Toolbar = props =>(
    <Header> 
        <nav className='toolbar_navigation'>
            <div className='toolbar_toogle_button'>
                <BotaoToogle click={props.sideMenuClick}/>
            </div>
            <div />
            <div className='toolbar_navigation_item'>
                <ul>
                <li><Link to="/"><FaRegAddressCard size={30}/><p>QUEM SOMOS</p></Link></li>
                <li><Link to="/"> <FaMapMarkedAlt size={30}/><p>LOCALIZAÇÃO</p></Link></li>
                <li><Link to="/"><FaRegCommentDots size={30}/><p>CONTATO</p></Link></li> 
                </ul>
            </div>
            <div className='toolbar_logo'>

            <Link to="/"> <img src='https://res.cloudinary.com/apinodeteste/image/upload/v1556741879/ZuzuCake/Logo/zuzuLogo_x0crgs.png' alt='ZuzuCakes' /></Link>
               
            </div>
            <div className='spacer' />
            <div className='toolbar_navigation_item'>
                <ul>
             
                <li><Link to="/produtos" > <FaBirthdayCake size={30}/> <p>PRODUTOS</p></Link></li>
                <li><Link to="/admin/produtos/cadastro"><FaTools size={30}/><p>CADASTRAR</p></Link></li>
                <li><Link to="/"><FaSearch size={30}/><p>BUSCAR</p></Link></li>
                <li><Link to="/admin/login" > <FaKey size={30} /><p>LOGIN</p></Link></li>
                </ul>
            </div>
        </nav>
    </Header>
);

export default Toolbar;
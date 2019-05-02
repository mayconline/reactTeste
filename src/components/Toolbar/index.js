import React, {Fragment} from 'react';
import{Link} from 'react-router-dom';

import BotaoToogle from '../ToogleButton';
import {Header, TopHeader, ToogleMenu}  from './styled';


import { FaBirthdayCake, FaMapMarkedAlt,
     FaTools, FaRegAddressCard, FaRegCommentDots,
     FaSearch, FaFacebookF,
     FaInstagram, FaWhatsapp, 
     FaBars} from "react-icons/fa";
 
const Toolbar = props =>(
    <Fragment>
        <TopHeader >
            <div className='social_bar'>                
            <a href="/"><FaFacebookF color={'#000'} size={20}/></a>
            <a href="/"><FaInstagram color={'#000'} size={20}/></a>
            <a href="/"><FaWhatsapp color={'#000'} size={20}/></a>
            </div>

            <div className='admin_area'>
            <ul>
                <li> <Link to="/admin/login"  className='login'> ENTRAR</Link></li>
                <li > <Link to="/" className='register' > REGISTRAR</Link></li>
            </ul>
            </div>
        </TopHeader>


        <Header> 
        <nav className='toolbar_navigation'>

        

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
                
                </ul>
            </div>

            
           
    
        </nav>
        
      
    </Header>

    <ToogleMenu >
            <button onClick={props.sideMenuClick}>
            <FaBars color={'#E54B4D'} size={30}/>
            <p>MENU</p>
            </button>
        
        </ToogleMenu>
    
           
        

    </Fragment>

);

export default Toolbar;
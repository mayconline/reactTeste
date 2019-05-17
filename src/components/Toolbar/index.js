import React, {Fragment} from 'react';
import{Link} from 'react-router-dom';


import {Header, TopHeader, ToogleMenu}  from './styled';
import AdminBar from '../AdminBar';


import { FaBirthdayCake, FaMapMarkedAlt,
     FaRegAddressCard, FaRegCommentDots,
     FaSearch, FaFacebookF,
     FaInstagram, FaWhatsapp, 
     FaBars} from "react-icons/fa";
 
const Toolbar = ({AdminOpen, AdminBarState, sideMenuClick}) =>(
    <Fragment>

        {AdminBarState &&(
            <AdminBar AdminClose={AdminOpen}/>
        )}
       
       
       {!AdminBarState &&(
            
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
            <li>  <FaBars onClick={AdminOpen} color={'#E54B4D'} size={30}/></li>
      
        </ul>
        </div>           
</TopHeader> 

      
       )}

        <Header> 
        <nav className='toolbar_navigation'>
        
              <div className='toolbar_logo'>
            <Link to="/"> <img src='https://res.cloudinary.com/apinodeteste/image/upload/v1556741879/ZuzuCake/Logo/zuzuLogo_x0crgs.png' alt='ZuzuCakes' /></Link>   
                 </div>
          
                   
            <div className='toolbar_navigation_item'>
                <ul>
                <li><Link to="/"><FaRegAddressCard size={30}/><p>QUEM SOMOS</p></Link></li>
                <li><Link to="/"> <FaMapMarkedAlt size={30}/><p>LOCALIZAÇÃO</p></Link></li>
                <li><Link to="/"><FaRegCommentDots size={30}/><p>CONTATO</p></Link></li>
                <li><Link to="/produtos" > <FaBirthdayCake size={30}/> <p>PRODUTOS</p></Link></li>               
                <li><Link to="/"><FaSearch size={30}/><p>BUSCAR</p></Link></li>
                
                </ul>
            </div>

           
           
    
        </nav>
        
      
    </Header>

    <ToogleMenu >
            <button onClick={sideMenuClick}>
            <FaBars color={'#E54B4D'} size={30}/>
            <p>MENU</p>
            </button>
        
        
        </ToogleMenu>
    
           
        

    </Fragment>

);

export default Toolbar;
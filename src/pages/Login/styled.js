import styled from 'styled-components';

export const LoginForm = styled.div`
    
        
        height: 100vh;
        background: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background:purple;
        padding:1rem;

     form{
        display:flex;
        justify-content:center;
        flex-wrap:flex;
        flex-direction:column;
        align-items:center;
      
        padding:2rem 10rem;   
        
        box-shadow: 0px 0.25rem 0.8rem 0 rgba(0,0,0,0.2);
        background:#fff;
       

             button{
                font-size:0.8rem;
                border-radius:0.5rem;
                display:block;
                border:none;
                padding:1rem 3rem;
                margin:1rem ;
                cursor:pointer;
                background:#009933;
                color:white;

                     &:hover {
                        opacity:0.7;
                       
                         }
             }


    }

    .img-logo{
        display:flex;
        justify-content:center;
        flex-direction:column;
       
    }

`;
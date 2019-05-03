import styled from 'styled-components';

export const Title = styled.header`

 background:#fff;
 padding:1rem;
 margin:0.5rem;

 -webkit-box-shadow: 2px 2px 7px 0px rgba(138,134,138,0.2);
-moz-box-shadow: 2px 2px 7px 0px rgba(138,134,138,0.2);
box-shadow: 2px 2px 7px 0px rgba(138,134,138,0.2);

  h1{
    text-align:center;     
    color:#f00;
    margin:0.5rem;

                 &::after, &::before{
                  content:'';
                   width:200px;
                   height:2px;
                   background:#f00;
                  display:block;
                  margin: 1rem auto;
                  
                }
                
  }  
    
                
  h2{
    text-align:center;     
    color:#010101;
    margin:0.5rem auto;
    font-weight:300;
    font-size:1rem;
    font-style:italic;
    

  }           

    a{
     
      border:solid 0.1rem #ebedef; 
               border-radius:0.2rem;
               color: #E54B4D;
               display: flex;
               justify-content:center;
               text-decoration: none;                  
                
                font-weight:bold;
                margin: 0.7rem auto; 

               padding: 0.5rem 0.5625rem;
               max-width:250px;

               &:hover{
                    background: #E54B4D;
                    color:#fff;
                    border:solid 0.1rem transparent; 
                    text-decoration: none;  
                    display: flex;
               justify-content:center;
                }

    } 

`;

import styled from 'styled-components';

export const Header = styled.section`
  
  padding:0.25rem;

  
 

  img{
    display:flex;
     justify-content:center;
     align-items:center;
                   
    width:100%;
    max-width:400px;
    height:70vh;
    padding: 0.5rem 0.25rem;
    border-style: none;
   
    

          &:hover{
            -webkit-box-shadow: 2px 2px 17px 0px rgba(224,201,110,1);
-moz-box-shadow: 2px 2px 17px 0px rgba(224,201,110,1);
box-shadow: 2px 2px 17px 0px rgba(224,201,110,1);
          }
    
                }

          figcaption{
          
          display:flex;
          justify-content:center; 


             &:hover{
              color:orange;
             

                  }
          }      


       button.slick-arrow, .slick-next, .slick-prev{
        
         display:none !important;
         
       }   

`;




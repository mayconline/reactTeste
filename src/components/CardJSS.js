import styled from 'styled-components';


export const Card = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;
   
    
    max-width:328px;
    margin: 0 auto;
   
  &:hover{
    
    box-sizing: border-box;
    transition: box-shadow .3s ease;
    box-shadow:0 4px 24px 0 rgba(5,27,44,.2);
    border-radius:0.5rem;
    
  }

    cursor: pointer;
    
`;

export const Content = styled.div`

    margin:0.5rem;
 width:100%;
 max-width:328px;
   
    border-radius:0.5rem;

 
 


`;



export const CardContent = styled.div`
   
   


    img{
                    display:flex;
                    align-self:center; 
                    align-items:center;
                   
                    width:100%;
                   
                    max-height:450px;
                    
                   
                }
   
  

    
`;

export const CardFooter = styled.div`
    background-color:orangered;
    color:#fff;
            display:flex;
            justify-content:space-between;
            flex-direction:column;
            flex-wrap:wrap;
    
    padding:1rem;
    text-align:center;

        button{
          margin:0.5rem;
         
        }
       
    `;


export const Description = styled.div`
    display:flex;
justify-content:space-between;
`;

export const CardHeader = styled.div`

display:flex;
justify-content:space-between;
  
    margin:0;
    padding:0;
    
        span {
            font-size:0.9rem;
           padding:0.5rem;
           
          color:#fff;
            
           
        }
       h1{
            font-size:1.5rem;
            font-weight:bold;
            padding:0.5rem; 
            
           color:#fff;
           
           
        }
    
`;
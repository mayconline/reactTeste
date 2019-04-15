import styled from 'styled-components';


export const Card = styled.div`

    height:100%;
    
    
    display:flex;
    flex-direction:column;   
    justify-content:center; 
    flex-wrap:wrap;
    
    box-shadow: 0px 0.25rem 0.8rem 0 rgba(0,0,0,0.2);
    border-radius:0.5rem;
    border:none;
    margin:1rem;
`;


export const CardHeader = styled.div`
    background-color:#417F94;
    border:none;

    border-top-right-radius:0.5rem;
    border-top-left-radius:0.5rem;

    display:flex;
    justify-content:center;
    flex-wrap:wrap;

    margin:0;
    padding:0;
        span {
            font-size:0.9rem;
           padding:0.5rem;
            display:flex;
            justify-content:flex-end;
            flex-wrap:wrap;
            
            flex:1;
        }
       h1{
            font-size:1.5rem;
            padding:0.5rem; 
            display:flex;
            justify-content:center;
            flex-wrap:wrap;
           
            flex:1;
           
        }
    
`;

export const CardContent = styled.div`
    background-color:#E0FFFF;
    border:none;
   
   p{
            font-size:1rem;
            padding:1rem; 
            display:flex;
            justify-content:flex-start;
            flex-wrap:wrap;
            
            flex:1;
   }
    
`;

export const CardFooter = styled.div`
    background-color:#D3D3D3;
    
            display:flex;
            justify-content:center;
            flex-wrap:wrap;
    
    padding:1rem;

    border-bottom-right-radius:0.5rem;
    border-bottom-left-radius:0.5rem;
    `;
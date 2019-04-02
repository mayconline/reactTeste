import styled from 'styled-components';


export const Card = styled.div`
    width: auto;
    margin: auto;
    
    box-shadow: 0px 0.25rem 0.8rem 0 rgba(0,0,0,0.2);
    border-radius:0.5rem;
   
`;


export const CardHeader = styled.div`
    background-color:#417F94;
   
    
    margin: auto;
    
    padding:1rem;

    font-size: 1.5rem;
    font-weight: bold;
    text-align:center;

    border-top-right-radius:0.5rem;
    border-top-left-radius:0.5rem;
    
`;

export const CardContent = styled.div`
    background-color:#E0FFFF;
   
    margin: auto;
    padding:1rem;
`;

export const CardFooter = styled.div`
    background-color:#D3D3D3;
    
    margin: auto;
    padding:1rem;

    border-bottom-right-radius:0.5rem;
    border-bottom-left-radius:0.5rem;
    `;
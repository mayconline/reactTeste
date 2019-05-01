import styled from 'styled-components';


export const Card = styled.div`

    display:flex;
    justify-content:center;
    align-items:center;

    
`;

export const Content = styled.div`

    width:100%;
    max-width:720px;
   
    margin:0.5rem;
    background:#fff;
    border-radius:0.5rem;
    border:none;
 

`;

export const CardHeader = styled.div`
    background-color:#417F94;
    border:none;

    

    border-top-right-radius:0.5rem;
    border-top-left-radius:0.5rem;

    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;

    margin:0;
    padding:0;
        span {
            font-size:0.9rem;
           padding:0.5rem;
            display:flex;
            justify-content:flex-end;
            flex-wrap:wrap;
          
            
           
        }
       h1{
            font-size:1.5rem;
            padding:0.5rem; 
            display:flex;
            justify-content:start;
            flex-wrap:wrap;
           
           
           
        }
    
`;

export const CardContent = styled.div`
    background-color:#E0FFFF;
    border:none;



    img{
                    display:flex;
                    align-self:center; 
                    align-items:center;
                   
                    width:100%;
                    max-width:400px;
                    max-height:450px;
                    padding:0.2rem;
                   

                }
   
   ul{
    margin-top:0;


        li{
           display:flex;
            justify-content:space-between;
            align-items:center;
            color:#444;

                &+li{
                    margin-top:15px;
                };

               /* img{
                    display:flex;
                    align-self:center; 
                    align-items:center;
                    flex-direction:column;
                    width:100%;
                    max-width:400px;
                };*/

        }
   };
    
`;

export const CardFooter = styled.div`
    background-color:#D3D3D3;
    
            display:flex;
            justify-content:space-between;
            flex-wrap:wrap;
    
    padding:1rem;

    border-bottom-right-radius:0.5rem;
    border-bottom-left-radius:0.5rem;

            div{
                display:flex;
                flex-direction:column;

                span{
                    font-size:12px;
                    
                    margin-top:5px;
                }
            }
    `;
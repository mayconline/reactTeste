import styled from 'styled-components';

export const Container = styled.nav`

background: linear-gradient(to left, #b31217, #e52d27);
width:100%;
color:white;
padding:0;
height:41.5px;

    .menu{
        
        margin:0;
        padding: 0;
        display:flex;
        justify-content:flex-end;
        align-items:center;
        height: 100%;
           ul{

                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                flex-wrap: wrap;    
               

                    li{
                        cursor: pointer;
                        display: flex;
                        text-align: center;
                        margin: 0 auto;
                        align-items:center;
                       
                    path:hover{
                        color:black;
                        padding:0.5rem;
                     }
                    
                        

                    }  

                a{
                    color:white;
                                 text-decoration: none;
                                 display: block;
                                 text-align: center;
                                 padding: 0.375rem 0.5625rem;
                                 font-size:0.7rem;
                                 font-weight:bold;
                                
                                 margin:0.2rem;
                                 border-radius:2rem;
                                 display: inline-block;

                                  &:hover{
                                    background:linear-gradient(160deg, #FAD961 0%, #F76B1C 100%);
                             
                                   
                                  }
                }                  
           }

    }
`;
import styled from 'styled-components';

export const Header = styled.header`

background:#FF2525;
display:flex;

flex-wrap:wrap;
border-bottom: 0.5rem solid orange ;
border-top: 0.5rem solid orange ;

    nav{
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;

    

    align-items: center;
    height: 100%;
    padding: 0 1rem;
    width: 100%;

         .toolbar_logo {
            
            
                img{
                    max-height:10rem;
                }

             @media (max-width:500px) {
                  
                        
                 }
            }



         .toolbar_navigation_item {
             display: flex;
             justify-self: center;



                    ul {
                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                flex-wrap: wrap;

                             a {
                                color:white;
                                 text-decoration: none;
                                 display: block;
                                 text-align: center;
                                 padding:1.5rem;
                                 font-size:1rem;
                                 font-weight:bold;
                                
                                 margin:0.2rem;
                                 border-radius:2rem;

                                  &:hover{
                                    background:linear-gradient(160deg, #FAD961 0%, #F76B1C 100%);
                             
                                   
                                  }
                                }


                    }

                    @media (max-width:1024px){
                        display:none;
                    }



            }     
            
          

        

        

           
               

    }





`;

export const TopHeader = styled.div`

background:#fff;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-items:center;
padding:0;

    .social_bar{

        

        padding:0.25rem;

        a{
            padding: 0.375rem 0.5625rem;
            
            path:hover{
                color:#E54B4D;
    
            }
        }
    }


    .admin_area{
       padding:0.25rem;
       
           ul{

                list-style: none;
                margin: 0;
                padding: 0;
                display: flex;
                flex-wrap: wrap;                         
           }

           .login   {
            color:#000;
            text-decoration: none;
                                 
            text-align: center;
            font-weight:bold;

            padding: 0.375rem 0.5625rem;

            display: inline-block;
                         
            margin-right: 0.5rem; 
            border:solid 0.1rem transparent; 

                    &:hover{
                color:#E54B4D;
                     }

                }

           
            
           .register{
               border:solid 0.1rem #ebedef; 
               border-radius:0.2rem;
               color: #E54B4D;
               display: inline-block;
               text-decoration: none;                  
                text-align: center;
                font-weight:bold;
                margin-right: 0.5rem; 

               padding: 0.375rem 0.5625rem;

                &:hover{
                    background: #E54B4D;
                    color:#fff;
                    border:none;
                    display: inline-block;
                    border:solid 0.1rem transparent; 
                }
           }
    }
`;



export const ToogleMenu = styled.header`
    
    
    
    margin:0.5rem;
    display:flex;
    justify-content:center;
    
    
    
    button{
        display:flex;
        justify-content:center;
        cursor: pointer;
        padding: 0.25rem 0.25rem;
        background:#fff;
        width:100%;

        border:solid 0.1rem #ebedef; 
        border-radius:0.25rem;

        p{
            font-size: 1.5rem; 
            color: #E54B4D;
            font-weight:bold;
            
        }

        

        &:hover{
            background: #E54B4D;
            p{
                color:#fff;
            }
         path{
            color:#fff;
            }
        }
    }
        

    @media(min-width:1025px){
        
             display: none;
                
             }  

`;
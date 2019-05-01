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
           
                a {
            color:white;
            text-decoration: none;
            font-size:1.5rem;
            

        
                   
                }
                
                img{
                    max-height:10rem;
                    align-self:center;

                }

             @media (max-width:500px) {
                 padding: 0.687rem;
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

                    @media (max-width:500px){
                        display:none;
                    }



            }     
            
          

        @media(min-width:500px){
        .toolbar_toogle_button {
             display: none;
                }
             }  

    }





`;






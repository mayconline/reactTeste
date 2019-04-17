import styled from 'styled-components';

export const Header = styled.header`

background: purple;
display:flex;
flex-wrap:wrap;

    nav{
    display: flex;
    justify-content: space-between;
    flex-wrap:wrap;

    align-items: center;
    height: 100%;
    padding: 0 1rem;
    width: 100%;

         .toolbar_logo {
            margin-left: 1rem;
                a {
            color:white;
            text-decoration: none;
            font-size:1.5rem;
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
                                 padding: 1rem;
                                  
                                  &:hover{
                                    background:orange;
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


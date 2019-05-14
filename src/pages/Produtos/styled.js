import styled from 'styled-components';

export const Section = styled.section`

margin-top:0.5rem;

column-count:4;

        @media(max-width:768px){
            column-count:3;
        }

    @media(max-width:400px){
        column-count:1;
        
    }
    
    div{
       /* box-shadow:0 2px 6px rgba(50,50,90,.1);*/
        overflow:hidden;
        break-inside:avoid-column;
    }
    
`;

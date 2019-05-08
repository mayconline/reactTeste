import styled from 'styled-components';

export const Title = styled.header`

padding:1rem;
 margin:0.5rem;

 h2{
    text-align:center;     
    color:#f00;
    margin:0.5rem;

    text-shadow: 1px 1px 1px orange;

    

                 &::after, &::before{
                  content:'';
                   width:200px;
                   height:2px;
                   background:#f00;
                  display:block;
                  margin: 1rem auto;
                  
                }
                
  }  


  h3{
    text-align:center;     
    color:#010101;
    margin:0.5rem auto;
    font-weight:300;
    font-size:1rem;
    font-style:italic;
    

  }           


`;

export const Steps = styled.article`
    display:flex;
    justify-content:center;
    flex-direction:column;
    text-align:center;
    color:#444;
    margin:0.5rem auto;
    padding: 0.5rem;

    height:190px;

    border:2px solid transparent;
    border-radius: 1rem;
        svg{
            margin:0.5rem auto;
        }

        h4{
            margin-bottom:0.5rem;
        }


  &:hover{
    
    box-sizing: border-box;
    transition: box-shadow .3s ease;
    box-shadow:0 4px 24px 0 rgba(5,27,44,.2);
    
  }
`;
import styled from 'styled-components';

export const Button = styled.button`
  /* background-color:#009933;*/
   /*color:#ffffff;*/
   font-size:0.8rem;
   border-radius:0.5rem;
   height:2rem;
   width:8rem; 
   border:none;
   margin: 0 0.25rem;
   cursor:pointer;
   

   background-color:${props => props.bt1bgcolor || props.bt2bgcolor};
   color:${props => props.bt1txtcolor || props.bt2txtcolor};
   display:${props => props.bt1 || props.bt2};

    &:hover {
      opacity:0.7;
      border: solid 1px ${props=>props.bt1txtcolor};
    }
`;

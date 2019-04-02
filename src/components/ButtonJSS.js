import styled from 'styled-components';

export const Button = styled.button`
  /* background-color:#009933;*/
   /*color:#ffffff;*/
   font-size:0.8rem;
   border-radius:0.5rem;
   height:2rem;
   width:8rem; 

   background-color:${props => props.bt1bgcolor || props.bt2bgcolor};
   color:${props => props.bt1txtcolor || props.bt2txtcolor};
   display:${props => props.bt1 || props.bt2};

`;

import styled from 'styled-components';

export const Container = styled.div`
    max-width:1360px;
    padding-right:15px;
    padding-left:15px;
    margin-left:auto;
    margin-right: auto;
    box-sizing:border-box;
    &:before ,
    &:after {
        content: ' ';
    display: table;
    }
    &:after{
        clear: both;
    }
  
`;
export const Row = styled.div`
    width:100%;
    height:auto;
    float:left;
    box-sizing:border-box;
    &:before,
    &:after {
        content: " ";
    display:table;
    }
    &:after{
        clear: both;
    }

`;

export const Col = styled.div`
    float:left;
    padding: .25rem;
    min-height:1px;
    box-sizing: border-box;
    width:100%;

    @media only screen and (min-width:768px) {
        width: ${props => (props.col ? props.col /12*100 : '8:33')}%;
    }
`;


import styled from 'styled-components';

export const Modal_Container = styled.section`
/*
width:100vw;
height:100vh;*/

    .modalContainer{
      
height: 100%;
width: 100%;


position:fixed;
top:0px;
left:0px;
background:rgba(0,0,0,.5);
z-index:2000;

display:flex;
justify-content:center;
align-items:center;

opacity:0;
transform:translate3d(0, -105%, 0);
transition: transform 0.4s ease-out;

    }

.open{
    opacity:1;
    transform: translate3d(0, 0, 0);
    transition: transform 0.4s ease-out;
    }

    .modal{
        background:white;
        width:60%;
        min-width:300px;
        padding:40px;
        border: 10px solid #988b7a;
        box-shadow:0 0 0 10px white;
        position:relative;
       

            .fechar{
                position:absolute;
                top:-30px;
                right:-30px;
                width:50px;
                height:50px;
                border-radius:50%;
                border: 4px solid white;
                background:#988b7a;
                color:white;
                cursor: pointer;
                box-shadow:0 4px 0 rgba(0,0,0,.3);
                font-size:1rem;


            }
    }

    @keyframes modal {
        from{
            opacity:0;
            transform:translate3d(0, -105%, 0);
        }to{
            opacity:1;
            transform:translate3d(0, 0, 0);
        }
    }

    
`;


import styled from 'styled-components';

export const SideMenu = styled.div`

.side_menu {
    height: 100%;
    background: white;
    box-shadow: 2px 0px 5px rgba(0,0,8, 0.5);
    position: fixed;
    top:0;
    left: 0;
    width: 70%;
    max-width: 400px;
    z-index: 200;
    transform: translateX(-105%);
    transition: transform 0.3s ease-out;
}

.open{
    transform: translateX(0);
}

.side_menu ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.side_menu li {
    margin:0.5rem 0;
}

.side_menu a {
    color:purple;
    text-decoration: none;
    font-size: 1.2rem;
}

.side_menu a:hover,
.side_menu a:active {
    color: orange;
}

@media(min-width:1025px){
    .side_menu{
        display: none;
    }
}




`;
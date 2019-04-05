import styled from 'styled-components';

export const MenuJSS = styled.div`
    
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    background-color: #333;
   

   ul {
  list-style: none;
  margin: 0;
  padding: 0;
  
  
  display:flex;
  justify-content:center;
  flex-wrap:wrap
}

li {
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover {
  background-color: #F0F;
  color:#000;
}

  header{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    padding:14px 16px;
    color: white;
  }


`;

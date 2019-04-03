import styled from 'styled-components';

export const MenuJSS = styled.div`
    
   ul {
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  display:flex;
  flex-wrap:wrap;
}

li {
  display:flex;
  justify-content:space-between;
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
  background-color: #111;
}
`;

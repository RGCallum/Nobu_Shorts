import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyles = styled.div`
*{
    margin: 0;
}
display: flex;
padding: 10px;
justify-content: space-around;
background: black;
font-weight: 800;
color: turquoise;
font-size: 25px;
margin: 0;

a{
    text-decoration: none;  
}
a:visited{
    color: turquoise;
}
a:hover{
    color: white;
}
`



class NavBar extends Component {
    render() {
      return (
        <NavBarStyles>
            <div>
          <Link to="/"> 🏠 Home</Link>
          </div>
          
        </NavBarStyles>
      );
    }
  }
  
  export default NavBar;
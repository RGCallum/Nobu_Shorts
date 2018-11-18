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
font-weight: 400;
color: turquoise;
font-size: 20px;
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
          <Link to="/users"> 👤 Users</Link>
          <Link to="/users/:userID"> 🗂 Profile</Link>

          <Link to="/films/:filmId"> 🎬 Films</Link>
          <Link to='/infos/:infoId'>  InfoShow</Link>



          </div>
          
         </NavBarStyles>
      );
    }
  }
  
  export default NavBar;
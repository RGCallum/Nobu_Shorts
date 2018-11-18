import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import UserShow from './UserShow';


const ImgStyles = styled.div`
display:flex;
*{
    margin: 0;
}
align-items: center;
justify-content: center;

img{
    
  position: relative;
  z-index: -2;
//   height: 114vh;
width: 100vw;

  background-size: cover;
  background-repeat: no-repeat;
//   margin-top: 100;



}`

const CountStyles = styled.div`
    z-index: 1;
    position: absolute;
    background-size: 10%;
    width: -30%;
    height: -10%;
    margin-top: -10%;
    
`


class Home extends Component {
    render() {
        return (
            <div>

                <ImgStyles>
                    <CountStyles>
                        Welcome to NoBu Shorts <br/>
                        A space for Independent Filmmakers to display their work! <br/>
                        Although the film may have "No Budget" <br/>
                        it doesn't have to look that way!
                       <br/> <a href="/users">
                        <button>Click to Enter </button>
                        </a>
  {/* <img id = 'countdown' src="/images/clapping.gif" alt="countdown"/> */}
                     </CountStyles> 
                    <img src="/images/blankScreenTheatre3.png" alt="curtain" />
                </ImgStyles>

            </div>
        );
    }
}

export default Home;
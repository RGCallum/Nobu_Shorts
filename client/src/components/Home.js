import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Users from './Users';


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

const Welcome = styled.div`
animation: slide-in-blurred-top 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
@keyframes slide-in-blurred-top {
    0% {
              transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
              transform-origin: 50% 0%;
              filter: blur(40px);
      opacity: 0;
    }
    100% {
              transform: translateY(0) scaleY(1) scaleX(1);
              transform-origin: 50% 50%;
              filter: blur(0);
      opacity: 1;
    }
  }


  

`
const ASpace = styled.div`

animation: slide-in-blurred-right 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) 2s both;
@keyframes slide-in-blurred-right {
    0% {
              transform: translateX(1000px) scaleX(2.5) scaleY(0.2);
              transform-origin: 0% 50%;
              filter: blur(40px);
      opacity: 0;
    }
    100% {
              transform: translateX(0) scaleY(1) scaleX(1);
              transform-origin: 50% 50%;
              filter: blur(0);
      opacity: 1;
    }
  }
  
`

const Although = styled.div`

animation: slide-in-blurred-left 1s cubic-bezier(0.230, 1.000, 0.320, 1.000) 3.5s both;
@keyframes slide-in-blurred-left {
    0% {
              transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
              transform-origin: 100% 50%;
              filter: blur(40px);
      opacity: 0;
    }
    100% {
              transform: translateX(0) scaleY(1) scaleX(1);
              transform-origin: 50% 50%;
              filter: blur(0);
      opacity: 1;
    }
  }
  
`


const WeTreat = styled.div`

animation: bounce-in-top 1.1s 5.5s both;
@keyframes bounce-in-top {
    0% {
              transform: translateY(-500px);
              animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
              transform: translateY(0);
              animation-timing-function: ease-out;
    opacity: 1;
    }
    55% {
              transform: translateY(-65px);
              animation-timing-function: ease-in;
    }
    72% {
              transform: translateY(0);
              animation-timing-function: ease-out;
    }
    81% {
              transform: translateY(-28px);
              animation-timing-function: ease-in;
    }
    90% {
              transform: translateY(0);
              animation-timing-function: ease-out;
    }
    95% {
              transform: translateY(-8px);
              animation-timing-function: ease-in;
    }
    100% {
              transform: translateY(0);
              animation-timing-function: ease-out;
    }
  }

`
const HoverButton = styled.div`
button {
    bottom: 5px;
    right: 200px;
    color: white;
    background: #1d355763;
    color: white;
      font-size: 1.6rem;
      font-weight: bold;
      padding: 10px;
      border-radius: 5px;
      animation: fade-in-fwd 1s cubic-bezier(0.390, 0.575, 0.565, 1.000) 7s both;
      @keyframes fade-in-fwd {
        0% {
                  transform: translateZ(-80px);
          opacity: 0;
        }
        100% {
                  transform: translateZ(0);
          opacity: 1;
        }
      }
`







class Home extends Component {
    render() {
        return (
            <div>
                <ImgStyles>
                    <CountStyles>
                        
                        <Welcome><h1> Welcome to NoBu Filmmakers</h1></Welcome> <br/>
                       <ASpace> <h2>A space for Independent Filmmakers to display their work!</h2></ASpace>  <br/>
                       <Although><h2>Although your film may be created with "No Budget" </h2></Although><br/>
                        <WeTreat> <h2>We treat it like a Blockbuster!</h2></WeTreat>
                       <br/> <Link to="/users">
                       <HoverButton>
                        <button>Click to Enter </button>
                        </HoverButton>
                        </Link>
  {/* <img id = 'countdown' src="/images/clapping.gif" alt="countdown"/> */}
                     </CountStyles> 
                    <img src="/images/blankScreenTheatre3.png" alt="curtain" />
                </ImgStyles>

            </div>
        );
    }
}

export default Home;
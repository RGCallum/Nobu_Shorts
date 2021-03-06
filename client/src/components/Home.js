import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const BkgdColors = styled.div`
padding: 110px;
width: 75vw;
height: 75vh;
background-image: url('https://thumbs.gfycat.com/SaltyPowerlessFulmar-size_restricted.gif');
background-repeat: no-repeat;
background-position: center;
background-size: cover;
img{
  z-index: -1;

}

@media only screen and (min-width: 1024px) and (max-width: 1439px){
h1{
  font-size: 3vw;
}
h2{
  font-size: 2.5vw;
}

width: 75vw;
height: 75vh;

}

@media only screen and (min-width: 320px) and (max-width: 425px){
  h1{
    margin-top: -50%;
    font-size: 5vw;
  }
  h2{
    font-size: 4vw;
  }
width: 100vw;
height: 100vh;
  
  }

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
  width: 75vw;
  height: 45vh;
}


//ipad pro
    @media only screen and (width: 1024px)   {
       h1 { 
       margin-top: 40%;     
        }

        }

        

`
const ImgStyles = styled.div`
display:flex;
*{
    margin: 0;
}
align-items: center;
justify-content: center;

img{
    
  position: relative;
  z-index: 1;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  
}

@media only screen and (min-width : 768px) and (max-width : 1024px) {
  img{
    background-size: 190%;
    width: 190%;
    height: 190%;
  }


}

@media only screen and (min-width : 320px) and (max-width : 425px) {
  img{
    background-size: cover;
    width: 150%;
    height: 100vh;
  }
}

`

const TextStyles = styled.div`
    z-index: 1;
    position: absolute;
    background-size: 10%;
    width: -30%;
    height: -10%;
    margin-top: -10%;
    color: white;
    text-shadow: 2px 2px 2px black; 
    box-shadow: 2px 2px 2px black;
    
`

const Welcome = styled.div`
display: flex ;
justify-content: center ;
font-size: 10vw;
animation: tracking-in-expand 1s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.8s both;
@keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }

`
const ASpace = styled.div`
display: flex ;
justify-content: center ;
// margin-left: 5%;
font-size:5vw;
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
display: flex ;
justify-content: center ;
// margin-left: 8%;
font-size:5vw;
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
display: flex ;
justify-content: center ;
font-size:5vw;
animation: bounce-in-top 1.1s 5s both;
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

const Text = styled.div`
// width: 50%;

`

const HoverButton = styled.div`
display: flex ;
justify-content: center ;
button {
    bottom: 5px;
    right: 200px;
    background-color: rgba(233, 65, 35, 0.81);
    color: white;
    text-shadow: 1px 1px 1px black;
    box-shadow: 2px 2px 2px black;
      font-size: 1.6rem;
      font-weight: bold;
      border-radius: 5px;
      border: solid 1px;
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
                    <TextStyles>
                        <br /><br /><br /><br /><br />
                        <BkgdColors>


                            <Welcome><h1> Welcome to NoBu Filmmakers </h1></Welcome> <br /> <br />
                            <ASpace> <h2>A space for Independent Filmmakers to display their work.</h2></ASpace>  <br /> <br />
                            <Although><h2>Although your film may be created with "No Budget" </h2></Although><br /> <br />
                            <WeTreat> <h2>We still treat it like a Blockbuster!💥</h2></WeTreat><br /><br />
                            <Link to="/users">
                                <HoverButton>
                                    <button>Click to Enter </button>
                                </HoverButton>
                            </Link>
                        </BkgdColors>
                    </TextStyles>
                    <img src="/images/blankScreenTheatre3.png" alt="curtain" />
                </ImgStyles>
            </div>
        );
    }
}

export default Home;
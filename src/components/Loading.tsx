import React from 'react'
import { keyframes, styled } from 'styled-components'
import Title from './Title'
import { device } from '../styles/Breakpoints';
import hulk from "../img/hulk_logo.png"
import captain_america from "../img/captain_america_logo.png"
import thor from "../img/thor_logo.png"
import iron_man from "../img/iron_man_logo.png"
import black_widow from "../img/black_widow_logo.png"

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  padding: 10px 0 0 0;
  width: 50vw;
  left: 50vw;
  background-color: ${({theme})=> theme.colors.black};
  top: 50vh;
  transform: translate(-50%);
  border-radius: 5px;
  box-shadow: 0 1px 10px 0px #00000081;
  @media ${device.sm}{
    width: 70vw;
  }
`

// Define the animation keyframe
const loadingAnimation = keyframes`
 0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(120%);
  }
`;

const logoAnimation = keyframes`
  0% { transform: scale(0.1) rotate(0deg); }
  25% { transform: rotate(0deg); }
  35% { transform: rotate(5deg); }
  45% { transform: rotate(-5deg); }
  55% { transform: rotate(5deg); }
  65% { transform: rotate(-5deg); }
  75% { transform: rotate(0deg); }
  100% { transform: scale(0.001) rotate(0deg); }
`

const LoadingLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
  transform: rotate(-360deg);
  animation: ${logoAnimation} 2s infinite;
`

const LoadingBarContainer = styled.div`
  width: 90%;
  overflow: hidden;
`
const LoadingBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({theme})=> theme.colors.orange};
  animation: ${loadingAnimation} 1.5s infinite;
`;

export default function Loading() {
  const [activeIndex, setActiveIndex] = React.useState(Math.floor(Math.random() * 5));

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % activeLogo.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const activeLogo = [
    hulk,
    black_widow,
    captain_america,
    iron_man,
    thor,
  ]

  return (
    <LoadingContainer>
      <LoadingLogo src={activeLogo[activeIndex] } />
      <LoadingBarContainer><LoadingBar/></LoadingBarContainer>
      <Title>Loading</Title>
    </LoadingContainer>
  )
}

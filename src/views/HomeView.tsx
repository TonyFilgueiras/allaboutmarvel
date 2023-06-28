import React from 'react'
import styled, { css } from "styled-components"
import Fadein from "../styles/Fadein"
import black_widow from "../img/black_widow.jpg"
import captain_america from "../img/captain_america.jpg"
import hulk from "../img/hulk.jpg"
import iron_man from "../img/iron_man.jpg"
import thor from "../img/thor.jpg"
import {StyledTitle} from '../components/Title'
import { device } from '../styles/Breakpoints'

const ThumbnailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100vw;
  overflow: hidden;

  @media ${device.xs}{
    grid-template-columns: 1fr 1fr 1fr;
  }
  `

const HeroThumbnail = styled.img<{ $animationDelay?: number; $isHoverDisabled?: boolean }>`
  opacity: 0;
  height: 50vh;
  width: 100%;
  animation: ${Fadein} 2s linear forwards;
  animation-delay: ${props => props.$animationDelay}s;
  transition: all.2s;
  transform-origin: left;
  

  ${props =>
    !props.$isHoverDisabled &&
    css`
      &:hover{
        transform: scale(1.1);
      }
    `}
`;

const HomeTitle = styled(StyledTitle)<{ $animationDelay?: number; $isHoverDisabled?: boolean }>`
  position: absolute!important;
  bottom: 25vh;
  transform: translateX(-50%);
  left: 50%;
  animation-delay: ${props => props.$animationDelay}s;

`

export default function HomeView() {
  const [isHoverDisabled, setIsHoverDisabled] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsHoverDisabled(false)
    },3500)
  }, [])
  

  return (
    <>
      <ThumbnailContainer>
        {!device.xxl && 
        <HeroThumbnail $isHoverDisabled={isHoverDisabled} $animationDelay={.3} src={ hulk } alt="Hulk"/>
        
      }
        {!device.xs && 
        <HeroThumbnail $isHoverDisabled={isHoverDisabled} $animationDelay={.6} src={ black_widow } alt="Black Widow"/>        
      }
        <HeroThumbnail $isHoverDisabled={isHoverDisabled} $animationDelay={.9} src={ captain_america } alt="Captain America"/>
        <HeroThumbnail $isHoverDisabled={isHoverDisabled} $animationDelay={1.2} src={ iron_man } alt="Iron Man"/>
        <HeroThumbnail $isHoverDisabled={isHoverDisabled} $animationDelay={1.5} src={ thor } alt="Thor"/>

      </ThumbnailContainer>
      <HomeTitle $animationDelay={2}>All about the Marvel universe</HomeTitle>
    </>
  )
}
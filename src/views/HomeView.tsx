import React from 'react'
import styled from "styled-components"
import Fadein from "../styles/Fadein"
import black_widow from "../img/black_widow.jpg"
import captain_america from "../img/captain_america.jpg"
import hulk from "../img/hulk.jpg"
import iron_man from "../img/iron_man.jpg"
import thor from "../img/thor.jpg"

const Container = styled.div`
  margin: 0 auto;
  width: fit-content;
  text-align: center;
  font-size: 24px;
`;

const ThumbnailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  width: 100vw;
`

const HeroThumbnail = styled.img<{ $animationDelay?: number; }>`
  opacity: 0;
  height: 50vh;
  width: 100%;
  animation: ${Fadein} 2s linear forwards;
  animation-delay: ${props=> props.$animationDelay}s;

`;

const Styledh1 = styled.h1<{ $animationDelay?: number; }>`
  opacity: 0;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 25vh;
  font-size: 2em;
  animation: ${Fadein} 2s linear forwards;
  animation-delay: ${props=> props.$animationDelay}s;
`


export default function HomeView() {
  return (
    <Container>
      <ThumbnailContainer>
        <HeroThumbnail $animationDelay={.3} src={ hulk } alt="Hulk"/>
        <HeroThumbnail $animationDelay={.6} src={ black_widow } alt="Black Widow"/>
        <HeroThumbnail $animationDelay={.9} src={ captain_america } alt="Captain America"/>
        <HeroThumbnail $animationDelay={1.2} src={ iron_man } alt="Iron Man"/>
        <HeroThumbnail $animationDelay={1.5} src={ thor } alt="Thor"/>
      </ThumbnailContainer>
      <Styledh1 $animationDelay={1.8}>All about the Marvel universe</Styledh1>
    </Container>
  )
}
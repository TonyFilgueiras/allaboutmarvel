import React from 'react'
import styled from "styled-components"
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

const HeroThumbnail = styled.img`
  height: 50vh;
  width: 100%;

`;

const Styledh1 = styled.h1`
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 25vh;
  font-size: 2em;
`


export default function HomeView() {
  return (
    <Container>
      <ThumbnailContainer>
        <HeroThumbnail src={ hulk } alt="Hulk"/>
        <HeroThumbnail src={ black_widow } alt="Black Widow"/>
        <HeroThumbnail src={ captain_america } alt="Captain America"/>
        <HeroThumbnail src={ iron_man } alt="Iron Man"/>
        <HeroThumbnail src={ thor } alt="Thor"/>
      </ThumbnailContainer>
      <Styledh1>All about the Marvel universe</Styledh1>
    </Container>
  )
}
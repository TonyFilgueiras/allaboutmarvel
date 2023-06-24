import React from 'react'
import styled from 'styled-components'
import { Characters } from '../typescript/interfaces/apiInterfaces'

type Props = {
    character : Characters,
}


const StyledCards = styled.div`
  display: flex;
  flex-direction: column;
  &:hover img{
    border: 3px inset red;
  } &:hover{
    cursor: pointer;
  }
  
  `
const CardsImg = styled.img`
  margin: 0 auto;
  /* height: 50px;
  width: 50px; */
  border-radius: 10px;
  border: 3px solid transparent;
  transition: all.2s;
`

export default function Cards({character}: Props) {
  return (
    <StyledCards key={character.id}>
        <CardsImg src={ `${character.thumbnail?.path}/portrait_xlarge.${character.thumbnail?.extension}` } alt={character.name} />
        {character.name}
    </StyledCards>
  )
}
import React from 'react'
import styled from 'styled-components'
import { NavLink, useParams } from 'react-router-dom';
import { Card } from '../typescript/types';
import getCardDisplayName from '../utils/GetCardDisplayName';

type Props = {
    card : Card
}


const StyledCards = styled.div`
  a{
    display: flex;
    flex-direction: column;
  }
  &:hover img{
    border: 3px inset red;
  } &:hover,
    label:hover{
      cursor: pointer;
    }
    /* border: 1px solid yellow; */
    min-height: 150px;
  
  `
const CardsImg = styled.img`
  margin: 0 auto;
  /* height: 50px;
  width: 50px; */
  border-radius: 10px;
  border: 3px solid transparent;
  transition: all.2s;
`

export default function Cards({ card }: Props) {
  const { detail } = useParams()
  
  return (
    <StyledCards key={card.id}>
      {detail ?
        <NavLink to={`/${detail}/${card.id}`}>
        {card.thumbnail && 
          <CardsImg src={ `${card.thumbnail?.path}/portrait_xlarge.${card.thumbnail?.extension}` } alt={getCardDisplayName(card)} />
        }
          <label>{getCardDisplayName(card)}</label>
      </NavLink> :
        <NavLink to={`${card.id}`}>
        {card.thumbnail && 
          <CardsImg src={ `${card.thumbnail?.path}/portrait_xlarge.${card.thumbnail?.extension}` } alt={getCardDisplayName(card)} />
        }
          <label>{getCardDisplayName(card)}</label>
        </NavLink>}
    </StyledCards>
  )
}
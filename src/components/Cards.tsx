import React from 'react'
import styled from 'styled-components'
import { NavLink, useParams } from 'react-router-dom';
import { Card } from '../typescript/types';
import getCardDisplayName from '../utils/GetCardDisplayName';
import useScreenWidth from '../hooks/UseScreenWidth';
import { device } from '../styles/Breakpoints';

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
  @media ${device.md}{
    max-width: 100px;
    font-size: 0.9em;
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

export default function Cards({ card }: Props) {
  const { detail } = useParams()
  const below600 = useScreenWidth(600)
  const below900 = useScreenWidth(900)
  const [imgText, setImgText] = React.useState('portrait_small')

  React.useEffect(() => {
    if (below600) {
      setImgText('portrait_small')
    } else if (below900 && !below600) {
      setImgText('portrait_medium')
    } else {
      setImgText('portrait_xlarge')
    }
  },[below600, below900])


  return (
    <StyledCards key={card.id}>
      {detail ?
        <NavLink to={`/${detail}/${card.id}`}>
        {card.thumbnail && 
          <CardsImg src={ `${card.thumbnail?.path}/${imgText}.${card.thumbnail?.extension}` } alt={getCardDisplayName(card)} />
        }
          <label>{getCardDisplayName(card)}</label>
      </NavLink> :
        <NavLink to={`${card.id}`}>
        {card.thumbnail && 
          <CardsImg src={ `${card.thumbnail?.path}/${imgText}.${card.thumbnail?.extension}` } alt={getCardDisplayName(card)} />
        }
          <label>{getCardDisplayName(card)}</label>
        </NavLink>}
    </StyledCards>
  )
}
import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
    children?: ReactNode
}

const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(50px, 1fr));
  grid-gap: 5px;
  /* justify-content: space-between; */
  margin-bottom: 20px;
  /* border: 1px solid lime; */
  `


export default function CardsContainer({children}:Props) {
  return (
    <StyledCardsContainer>{children}</StyledCardsContainer>
  )
}
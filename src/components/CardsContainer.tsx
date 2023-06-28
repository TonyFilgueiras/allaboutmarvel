import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { device } from '../styles/Breakpoints'

type Props = {
    children?: ReactNode
}

const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(50px, 1fr));
  grid-gap: 5px;
  margin-bottom: 40px;
  @media ${device.lg}{
    grid-template-columns: repeat(4, minmax(50px, 1fr));
  }
  @media ${device.md}{
    grid-template-columns: repeat(4, minmax(50px, 1fr));
  }
  `


export default function CardsContainer({children}:Props) {
  return (
    <StyledCardsContainer>{children}</StyledCardsContainer>
  )
}
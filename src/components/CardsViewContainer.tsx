import React from 'react'
import { styled } from 'styled-components'
import { device } from '../styles/Breakpoints'

type Props = {
    children: React.ReactNode
}

const ViewContainer = styled.div`
  width: 70vw;
  margin: 0 auto;
  text-align: center;

  @media ${device.sm}{
    width: 100vw;
  }
`

export default function CardsViewContainer({children}:Props) {
  return (
    <ViewContainer>{children}</ViewContainer>
  )
}

import React from 'react'
import { styled } from 'styled-components';
import Fadein from '../styles/Fadein';
import { device } from '../styles/Breakpoints';

type Props = {
    children: React.ReactNode;
}

export const StyledTitle = styled.h1`
    opacity: 0;
    margin: 20px;
    font-size: 2em;
    font-weight: bold;
    animation: ${Fadein} 2s forwards;

    @media ${device.sm}{
      font-size: 1.5em;
    }
`

export default function Title({children}: Props) {
  return (
    <StyledTitle>{children}</StyledTitle>
  )
}
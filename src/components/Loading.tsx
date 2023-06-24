import React from 'react'
import BaseTitle from '../styles/BaseTitle'
import { styled } from 'styled-components'

const Title = styled.h1`
    ${BaseTitle}
    position: fixed;
    left: 50vw;
    top: 50vh;
    transform: translate(-50%);
    margin-bottom: 40px;
`

export default function Loading() {
  return (
    <Title>Loading</Title>
  )
}

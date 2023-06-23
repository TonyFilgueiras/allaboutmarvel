import React from 'react'
import BaseTitle from '../styles/BaseTitle'
import { styled } from 'styled-components'

const Title = styled.h1`
    ${BaseTitle}
    margin-bottom: 40px;
`

export default function Loading() {
  return (
    <Title>Loading</Title>
  )
}

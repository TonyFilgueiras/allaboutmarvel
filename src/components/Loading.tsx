import React from 'react'
import BaseTitle from '../styles/BaseTitle'
import { styled } from 'styled-components'

const Title = styled.h1`
    ${BaseTitle}
    position: fixed;
    padding: 20px;
    left: 50vw;
    background-color: ${({theme})=> theme.colors.black};
    top: 50vh;
    transform: translate(-50%);
    margin: 0 0 0px 0;
`

export default function Loading() {
  return (
    <Title>Loading</Title>
  )
}

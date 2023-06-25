import React from 'react'
import { styled } from 'styled-components'
import { StyledTitle } from './Title'

const LoadingTitle = styled(StyledTitle)`
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
    <LoadingTitle>Loading</LoadingTitle>
  )
}

import React from 'react'
import { keyframes, styled } from 'styled-components'
import Title from './Title'
import { device } from '../styles/Breakpoints';

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  padding: 20px 0 0 0;
  width: 50vw;
  left: 50vw;
  background-color: ${({theme})=> theme.colors.black};
  top: 50vh;
  transform: translate(-50%);
  border-radius: 5px;
  box-shadow: 0 1px 10px 0px #00000081;
  @media ${device.sm}{
    width: 70vw;
  }
`

// Define the animation keyframe
const loadingAnimation = keyframes`
 0% {
    transform: translateX(-120%);
  }
  100% {
    transform: translateX(120%);
  }
`;

const LoadingBarContainer = styled.div`
  width: 90%;
  overflow: hidden;
`
const LoadingBar = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({theme})=> theme.colors.orange};
  animation: ${loadingAnimation} 1.5s infinite;
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <LoadingBarContainer><LoadingBar/></LoadingBarContainer>
      <Title>Loading</Title>
    </LoadingContainer>
  )
}

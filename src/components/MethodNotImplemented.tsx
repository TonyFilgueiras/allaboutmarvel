import React from 'react'
import styled, { css } from "styled-components"
import { MousePosition } from '../typescript/interfaces/appInterfaces'
import Fadein from '../styles/Fadein'
import MethodNotImplementedContext from '../contexts/MethodNotImplementedContext'


const Styleddiv = styled.div<{ $isOpened?: boolean, $popUpPosition?: MousePosition }>`
    background-color: ${({ theme }) => theme.colors.red};
    padding: 20px;
    ${props => !props.$isOpened && css`
    display: none;
    `
    }
    ${props => props.$isOpened && css`
        opacity: 1;
        position: absolute;
        top: ${props.$popUpPosition!.y}px;
        animation: ${Fadein} .2s forwards;
        left: ${props.$popUpPosition!.x}px;
        transform: translateX(-100%);
        `}
    border-radius: 10px;
    transition: all 2.2s;
    `

export default function MethodNotImplemented() {
  const { isOpen, mousePosition } = React.useContext(MethodNotImplementedContext)
  return (
    <Styleddiv $isOpened={isOpen} $popUpPosition={mousePosition}>Method Not Implemented</Styleddiv>
  )
}
import React from 'react'
import styled, { css } from 'styled-components'
import Fadein from '../styles/Fadein'
import { MousePosition } from '../typescript/interfaces/appInterfaces'

type Props = {
    itens: Array<any>,
    isOpened: boolean,
    mousePosition: MousePosition,
    onClick: any,
    // onClick: void,
    // onClick: (id:number)=>{},
    // onClick: React.MouseEventHandler,
}

const StyledPopUp = styled.div<{ $isOpened?: boolean, $popUpPosition?: MousePosition }>`
    ${props => !props.$isOpened && css`
        display: none;
        position: relative;
        right: 30px;
    `
    
    }
    ${props => props.$isOpened && css`
        opacity: 1;
        position: absolute;
        top: ${props.$popUpPosition!.y}px;
        animation: ${Fadein} .2s forwards;
        left: ${props.$popUpPosition!.x}px;
        transform: translateX(-100%);
        z-index: 99;
        `}

    background-color: ${({ theme }) => theme.colors.black}; 
    transition: all 2.2s;
    `
const Styledli = styled.li<{ $isOpened?: boolean }>`
    ${props => !props.$isOpened && css`
        opacity: 1;
    `
    };
    ${props => props.$isOpened && css`
        opacity: 1;
        text-align: start;
        padding: 5px 20px 5px 5px;
    `
    };
    
    transition: all.2s;

    &:hover{
        cursor: pointer;
        background-color: ${({theme})=> theme.colors.red};
    }
`


export default function PopUpMenu({ itens, isOpened, mousePosition, onClick }: Props) {
  return (
    <StyledPopUp $isOpened={isOpened} $popUpPosition={mousePosition}>
        <ul>
            {itens.map((item) =>
                <Styledli $isOpened={isOpened} key={item.id} onClick={onClick}>{ item.text}</Styledli>
            )}      
        </ul>
      </StyledPopUp>
  )
}
import React from 'react'
import styled from 'styled-components'
import marvel_logo from "../img/marvel_logo.png"
import { Link } from 'react-router-dom'
import NavComponent from './NavComponent'
import { headerLinks } from '../utils/HeaderLinks'
import { device } from '../styles/Breakpoints'


const StyledHeader = styled.header`
    background: ${({theme})=> theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 1px 10px 0px #00000081;
    font-family: ${({ theme }) => theme.fonts.containers};
    font-weight: bold;
    @media ${device.sm}{
        flex-direction: column;
        font-size: 0.7;
    } @media ${device.xxs}{
        font-size: 0.6em;
    }
`

const MarvelLogo = styled.img`
    width: 100px;
    transition: all.2s;

    &:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`
export default function Header() {
  return (
      <StyledHeader>
          <Link to="/">
              <MarvelLogo src={ marvel_logo } />
          </Link>
          <NavComponent active={false} links={headerLinks}/>
      </StyledHeader>
  )
}
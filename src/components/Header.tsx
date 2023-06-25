import React from 'react'
import styled from 'styled-components'
import marvel_logo from "../img/marvel_logo.png"
import { Link } from 'react-router-dom'
import { Links } from '../typescript/types'
import NavLink from './NavLink'


const StyledHeader = styled.header`
    background: ${({theme})=> theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 1px 10px 0px #00000081;
    font-family: ${({ theme }) => theme.fonts.containers};
    font-weight: bold;

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
  const headerLinks: Links[] = [
    { text:'Characters', url: '/characters'}, 
    { text: 'Creators', url:'/creators'},
    { text: 'Comics', url: '/comics'},
    { text: 'Events', url: '/events'},
    { text: 'Series', url :'/series' },
    { text: 'Stories', url: '/stories' },
  ] 

  return (
      <StyledHeader>
          <Link to="/">
              <MarvelLogo src={ marvel_logo } />
          </Link>
          <NavLink links={headerLinks}/>
      </StyledHeader>
  )
}
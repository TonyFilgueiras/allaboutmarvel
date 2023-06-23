import React from 'react'
import styled from 'styled-components'
import marvel_logo from "../img/marvel_logo.png"
import { Link } from 'react-router-dom'


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
const Styledul = styled.ul`
    display: flex;
`
const Styledli = styled.li`
    padding: 15px 10px;
    margin: 0 5px;
    transition: all.2s;

    &:hover{
        cursor: pointer;
        background-color: ${props => props.theme.colors.red};
        box-shadow: 0 1px 10px 0px #00000081;
    }
    &:active{
        transform: scale(0.9);
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
          <nav>
              <Styledul>
                  <Link to="/characters">
                    <Styledli>Characters</Styledli>
                  </Link>
                  <Link to="/creators">
                    <Styledli>Creators</Styledli>
                  </Link>
                  <Link to="/comics">
                    <Styledli>Comics</Styledli>
                  </Link>
                  <Link to="/events">
                    <Styledli>Events</Styledli>
                  </Link>
                  <Link to="/series">
                    <Styledli>Series</Styledli>
                  </Link>
                  <Link to="/stories">
                    <Styledli>Stories</Styledli>  
                  </Link>
            </Styledul>
          </nav>
      </StyledHeader>
  )
}
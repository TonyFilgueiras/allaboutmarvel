import React from 'react'
import styled from 'styled-components'
import marvel_logo from "../img/marvel_logo.png"


const StyledHeader = styled.header`
    background: ${props => props.theme.colors.black};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-shadow: 0 1px 10px 0px #00000081;

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
`
const MarvelLogo = styled.img`
    width: 100px;
`

export default function Header() {
  return (
      <StyledHeader>
          <MarvelLogo src={ marvel_logo } />
          <nav>
              <Styledul>
                  <Styledli>Characters</Styledli>
                  <Styledli>Creators</Styledli>
                  <Styledli>Comics</Styledli>
                  <Styledli>Events</Styledli>
                  <Styledli>Series</Styledli>
                  <Styledli>Stories</Styledli>
            </Styledul>
          </nav>
      </StyledHeader>
  )
}
import React from 'react'
import { NavLink } from 'react-router-dom'
import { css, styled } from 'styled-components'
import { Links } from '../typescript/types'
import { device } from '../styles/Breakpoints'

type Props = {
    links: Links[],
    active: boolean,
}

export const Styledul = styled.ul<{ $activeLink?: boolean }>`
    display: flex;
    a {
        transition: all.2s;
        margin: 0 5px;
        
        &:active{
            transform: scale(0.9);
        }
    }

    ${props =>
    props.$activeLink && 
    css`
        .active{
        background-color: ${props => props.theme.colors.red};
        }
    `}

    @media ${device.xs}{
        font-size: 0.8em;
        border: 1px solid lime;
    }
`
const Styledli = styled.li`
    padding: 15px 10px;
    transition: all.2s;

    &:hover{
        cursor: pointer;
        background-color: ${props => props.theme.colors.red};
        box-shadow: 0 1px 10px 0px #00000081;
    }
`  

export default function NavComponent({links, active}: Props) {
  return (
      <nav>
        <Styledul $activeLink={active}>
            {links.map((link) =>
                <NavLink to={link.url} key={link.id}>
                    <Styledli>{link.text}</Styledli>
                </NavLink>
            )} 
        </Styledul>
      </nav>
  )
}
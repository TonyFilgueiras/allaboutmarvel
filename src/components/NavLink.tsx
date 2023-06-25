import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { Links } from '../typescript/types'

type Props = {
    links: Links[]
}

const Styledul = styled.ul`
    display: flex;
    a {
        margin: 0 5px;
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
    &:active{
        transform: scale(0.9);
    }

`

export default function NavLink({links}: Props) {
  return (
      <nav>
        <Styledul>
            {links.map((link) =>
                <Link to={link.url} key={link.text}>
                    <Styledli>{link.text}</Styledli>
                </Link>
            )} 
        </Styledul>
      </nav>
  )
}
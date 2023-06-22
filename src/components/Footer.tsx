import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: ${({theme})=> theme.colors.black};
`

export default function Footer() {
  return (
    <StyledFooter>Data provided by Marvel. © 2014 Marvel</StyledFooter>
  )
}
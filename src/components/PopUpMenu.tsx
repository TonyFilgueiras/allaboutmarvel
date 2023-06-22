import React from 'react'
import { styled } from 'styled-components'

type Props = {
    itens: Array<any>
}

const StyledPopUp = styled.div`
    border: 1px solid yellow;
`

export default function PopUpMenu({itens}: Props) {
  return (
      <StyledPopUp>
        <ul>
            {itens.map((item) =>
                <li key={item.id} onClick={item.handleClick}>{ item.text}</li>
            )}      
        </ul>
      </StyledPopUp>
  )
}
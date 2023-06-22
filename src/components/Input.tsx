import React from 'react'
import styled from 'styled-components'

type Props = {
    placeholder: string,
    type: string,
}

const StyledInput = styled.input`
  padding: 10px 20px;
  width: calc(100% - 40px);
`

export default function Input({placeholder, type}: Props) {
  return (
    <StyledInput type={type} placeholder={placeholder}/>
  )
}
import React from 'react'
import styled from 'styled-components'

type Props = {
    placeholder: string,
    type: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value: string
}

const StyledInput = styled.input`
  padding: 10px 20px;
  margin-bottom: 20px;
  width: calc(100% - 40px);
`

export default function Input({placeholder, type, ...props}: Props) {
  return (
    <StyledInput type={type} placeholder={placeholder} {...props}/>
  )
}
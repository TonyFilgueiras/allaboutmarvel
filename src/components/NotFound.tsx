import React from 'react'
import styled from 'styled-components'
import SearchOffIcon from '@mui/icons-material/SearchOff';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import Title from './Title';

const StyledNotFound = styled.div`
    margin: 20px;
`
export default function NotFound() {
  return (
      <StyledNotFound>
          <SearchOffIcon style={{ fontSize: 160 }}/>
          <Title>
              Not Found <SentimentVeryDissatisfiedIcon/>
          </Title>
    </StyledNotFound>
  )
}
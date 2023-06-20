import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 24px;
`;

export default function NotFoundView() {
  return (
    <Container>
        <h1>Page not found</h1>
    </Container>
  )
}
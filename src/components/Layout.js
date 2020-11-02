import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 0 32px;
`

export default function Layout({ children }) {
  return (
    <Container>
      <main>
        {children}
      </main>
    </Container>
  )
}
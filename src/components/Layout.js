import React from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
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
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
`

export default function Layout({ children }) {
  return (
    <Container>
      <Header>
        <nav className="nav">
          <a className="nav__link" href="/">Home</a>
        </nav>
      </Header>
      <main>
        {children}
      </main>
    </Container>
  )
}
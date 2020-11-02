import React from "react"
import { SocialLink } from '../components/SocialLink'
import Profile from '../assets/profile.png';
import Layout from "../components/Layout";
import { Helmet } from "react-helmet"
import styled from "styled-components";

const Article = styled.article`
  --title-shadow-color: var(--base-color--primary);

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;

  @media screen and (max-height: 540px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

const Header = styled.header`
  font-size: 3em;
  max-width: 30ch;
  text-align: center;
  margin-bottom: 48px;

  @media screen and (max-height: 540px) and (max-width: 580px) {
    display: none;
  }

  @media screen and (max-height: 540px) {
    font-size: 1.8em;
    margin-bottom: 0;
  }

  @media screen and (max-width: 768px)  {
    font-size: 1.8em;
  }
  
  h1 {
    margin: 0;
    text-align: center;
    animation: flicker 2s ease alternate infinite;
  }
`

const Body = styled.div``;

const Section = styled.section`
  margin-bottom: 48px;
  
  @media screen and (max-height: 540px) {
    margin-bottom: 0;
  }
`

const Avatar = styled.img`
  border-radius: 100%;
`

const Social = styled.div`
  display: grid;
  grid-auto-columns: auto;
  grid-auto-flow: column;
  gap: 32px;
  width: 100%;
  justify-content: center;
`

export default function Home() {
  return (
    <Layout>
      <Helmet>
        <html lang="pt-br" />
        <title>Fernanda Sales Bittencourt de Lemos</title>
        <meta name="description" content="Olá! Meu nome é Fernanda. Sou desenvolvedora front-end e tech lead de Design System na Conta Azul." />
      </Helmet>
      <Article>
        <Header>
          <h1>Fernanda Sales Bittencourt de Lemos</h1>
        </Header>
        <Body>
          <Section>
            <Avatar
              src={Profile}
              width="120"
              height="120"
              alt="Foto da Fernanda sorrindo em um evento"
            />
          </Section>
          <Section>
            <Social>
              <SocialLink
                href="https://br.linkedin.com/in/fernandasblemos"
                ariaLabel="Linkedin"
                svgComponent={SocialLink.Linkedin}
              />
              <SocialLink
                href="https://github.com/fsblemos"
                ariaLabel="Github"
                svgComponent={SocialLink.Github}
              />
              <SocialLink
                href="https://twitter.com/fsblemos"
                ariaLabel="Twitter"
                svgComponent={SocialLink.Twitter}
              />
            </Social>
          </Section>
        </Body>
      </Article>
    </Layout>
  )
}

import React from 'react'
import ReactDOM from 'react-dom/client'

import GlobalStyle, { Container } from './styles'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Projetos from './components/Projetos'
import Skills from './components/Skills'
import Contatos from './components/Contatos'
import Footer from './components/Footer'
import Header from './components/Navbar'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
      <Container>
        <Header /> 
        <Hero />
        <Sobre />
        <Projetos />
        <Skills />
        <Contatos />
        <Footer />
      </Container>
  </React.StrictMode>
)

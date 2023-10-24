import React from 'react'
import Header from '../../Components/Header'
import { Container, Content } from './styles'

export default function Layout ({ children }) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  )
}

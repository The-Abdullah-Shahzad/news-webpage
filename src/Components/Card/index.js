import React from 'react'
import { Container, Navigate, Image, Title, Abstract, Footer } from './styles'

export default function Card ({ data }) {
  return (
    <Container>
      <Navigate href={data?.url} target='_blank'>
        <Image image={data.multimedia && data?.multimedia[1]?.url} />
        <Title>{data.title}</Title>
        <Abstract>{data.abstract}</Abstract>
        <Footer>{data.subsection || data.section}</Footer>
      </Navigate>
    </Container>
  )
}

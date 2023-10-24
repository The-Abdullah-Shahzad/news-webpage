import React from 'react'
import { Container, Navigate, Image, Title, Abstract, Footer } from './styles'

export default function Card ({ data }) {
  return (
    <Navigate href={data?.url} target='_blank'>
      <Container>
        <Image
          image={
            (data.multimedia && data?.multimedia[1]?.url) ||
            'https://placebear.com/640/360'
          }
        />
        <Title>{data.title}</Title>
        <Abstract>{data.abstract}</Abstract>
        <Footer>{data.subsection || data.section}</Footer>
      </Container>
    </Navigate>
  )
}

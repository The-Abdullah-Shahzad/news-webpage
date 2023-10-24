import React from 'react'
import { Container, Header, Content } from './styles'
import Card from '../Card'

export default function Section ({ type, data }) {
  return (
    <Container>
      <Header>{type}</Header>
      <Content>
        {data.map(story => (
          <Card data={story} url = {story.url}/>
        ))}
      </Content>
    </Container>
  )
}

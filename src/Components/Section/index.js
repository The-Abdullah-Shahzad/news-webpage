import React from 'react'
import { Container, Header, Content, ViewAllBtn } from './styles'
import Card from '../Card'
import { useNavigate } from 'react-router-dom'

export default function Section ({ type, data, details }) {
  const navigate = useNavigate()
  const viewMore = () => {
    navigate('/' + type)
  }
  return (
    <Container>
      <Header>
        <div>{type}</div>
        {!details && <ViewAllBtn onClick={viewMore}>View More</ViewAllBtn>}
      </Header>
      <Content>
        {data?.map(story => (
          <Card data={story} url={story.url} />
        ))}
      </Content>
    </Container>
  )
}

import styled from 'styled-components'

export const Container = styled.div`
  margin: 0;
  position: relative;
`
export const Content = styled.div`
  padding: 2rem 5rem;
  @media screen and (max-width: 960px) {
    padding: 2rem;
  }
  @media screen and (max-width: 580px) {
    padding: 1rem;
  }
`

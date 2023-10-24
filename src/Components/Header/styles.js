import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem 5rem;
  background-color: black;
  position: sticky;
  @media screen and (max-width: 960px) {
    padding: 2rem;
  }
  @media screen and (max-width: 580px) {
    padding: 1rem;
  }
`
export const Heading = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 700;
`

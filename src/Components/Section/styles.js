import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`
export const Header = styled.div`
  width: 100%;
  border-left: 4px solid red;
  font-size: 21px;
  color: gray;
  font-weight: 700;
  padding: 0 0.3rem;
`
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  align-items: center;
  @media screen and (max-width: 850px) {
    gap: 1rem;
    justify-content: center;
  }
`

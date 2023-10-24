import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 350px;
  min-height: 400px;

  @media screen and (max-width: 760px) {
    width: 250px;
  }
`

export const Navigate = styled.a`
  text-decoration: none;
`

export const Image = styled.div`
  width: 350px;
  height: 200px;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (max-width: 760px) {
    width: 250px;
    height: 100px;
  }
`

export const Title = styled.div`
  color: black;
  font-size: 22px;
  font-weight: 500;
`
export const Abstract = styled.div`
  color: gray;
  font-size: 18px;
  text-align: justify;
`
export const Footer = styled.div`
  width: 100%;
  border-left: 2px solid red;
  font-size: 16px;
  color: lightgray;
  padding: 0 0.3rem;
  text-transform: uppercase;
`

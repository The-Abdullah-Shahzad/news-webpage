import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  // gap: 85%;
  width: 100%;
  border-left: 4px solid red;
  font-size: 21px;
  color: gray;
  font-weight: 700;
  padding: 0 0.3rem;
  text-transform: uppercase;
`
export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5rem;
  @media screen and (max-width: 850px) {
    gap: 1rem;
    justify-content: center;
  }
`
export const ViewAllBtn = styled.button`
  background-color: white;
  border:none;
  margin:auto 0;
  font-size:16px;
  color:gray;
  cursor: pointer;
  flex-shrink:0;
`

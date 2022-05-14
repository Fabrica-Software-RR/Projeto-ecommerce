import styled from 'styled-components'

export const Container = styled.div`
  display: inline-block;
  flex-direction: column;
  margin: 0%;
  align-items: center;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 375px) {
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
  }
`

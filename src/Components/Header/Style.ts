import styled from 'styled-components'


export const Cabecalho = styled.header`
  display: flex;
  align-items: center;
  justify-content: left;
  position: relative;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 375px) {
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
  }
`

export const Logo = styled.div`
  display: flex;
  margin: 20px 0px;
  width: 10%;
  height: 10vh;
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 415px) {
    width: 100%;
    background-size: contain;
    align-items: center;
    background-position: center;
    justify-content: center;
    background-repeat: no-repeat;
  }
`

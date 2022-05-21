import styled from 'styled-components'
const f = '/fundo.jpeg'
const logo = '/Fotos/rei-png.png'

export const Cabecalho = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: #f59e0b;
  background-size: cover;
  @media screen and (min-width: 375px) {
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
  }
`

export const Logo = styled.div`
  display: flex;
  margin: 0px 0px;
  position: relative;
  width: 10%;
  height: 10vh;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 415px) {
    width: 100%;
    background-size: 100%;
    align-items: center;
    background-position: center;
    justify-content: center;
    font-size: 10px;
  }
`

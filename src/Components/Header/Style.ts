import styled from 'styled-components'
const f = '/fundo.jpeg'
const logo = '/Fotos/rei-png.png'

export const Cabecalho = styled.header`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-color: #f59e0b;
  background-image: url(${f});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  @media screen and (min-width: 375px) {
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
  }
`

export const Logo = styled.div`
  display: flex;
  margin: 0px px;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 80vh;
  background-image: url(${logo});
  background-position: center;
  background-size: 100%;
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

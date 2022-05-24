import styled from 'styled-components'


export const Cabecalho = styled.header`
  display: flex;
  justify-content:space-evenly;
  position: relative;
  width: 100%;
  height: 20%;
  background-color: #f5f5f5;
  @media screen and (min-width: 375px) {
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
  }
`

export const Logo = styled.div`
  display: flex;
  margin: 20px 0px;
  left: 50px;
  padding: 10px;
  width: 100%;
  height: 50%;
  background-position: left;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 415px) {
    width: 100%;
    background-size: contain;
    align-items: center;
    background-position: center;
    justify-content: center;
    background-repeat: no-repeat;
  }
`

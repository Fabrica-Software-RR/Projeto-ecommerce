import styled from 'styled-components'


export const Cabecalho = styled.header`
  display: flex;
  justify-content:space-around;
  width: 100%;
  height: 50%;
  background-color: #f5f5f5;
  @media screen and (min-width: 375px) {
    width: 100%;
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
  }
`

export const Logo = styled.div`
  display: flex;
  position: relative;
  margin: 20px 0px;
  right: 10px;
  padding: 10px;
  width: 30%;
  height:100%;
 // background-color: blue;
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (max-width: 415px) {
    display: flex;
    width: 40%;
    height: 100%;
    background-size: contain;
    align-items: center;
    background-position: center;
    justify-content: center;
    background-repeat: no-repeat;
  }
`

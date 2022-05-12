import styled from 'styled-components'
import { Modal } from 'antd'


const f = '/fundo.jpeg'

export const Cabecalho = styled.header`
background-image: ${f};
height: 100vh;
display: flex;
align-items: center;
justify-content: space-around;
padding: 3em;
width: 100%;
@media screen and (max-width: 340px) {
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  flex-wrap: wrap;
  margin: 5px;
}
 p{
   color: white;
 }

`

export const Logo = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 30%;
height: 40%;
font-weight: bold;
overflow: hidden;
@media screen and (max-width: 340px) {
  font-size: 24px;
  width: 100%;
  height: 100%;
  margin: 5px;
}
`

export const Buscar = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
width: 50%;
height: 50px;
`

export const Carrinho = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
width: 2em;
height: 2em;
border-radius: 50%;
font-size: 36px;
font-weight: bold;
cursor: pointer;
`


export const ModalStyled = styled(Modal)`
  width: 100%;
  height: 100%;
  background-color: #fdba74;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  @media screen and (max-width: 340px) {
    font-size: 24px;
    width: 100%;
    height: 100%;
    margin: 5px;
  }
`

export const Rodape = styled.footer`
background-color: red;
`


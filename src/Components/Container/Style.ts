import styled from 'styled-components'

 const Container = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

 const C = styled.div`
  display: block;
  margin: 0;
  justify-content: center;
  width: 100%;
  height: 40%;
`

//div carrosel ajustar no meio da tela
 const B = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  margin: 0;
  width: 100%;
  height: 80%;
`

 const A = styled.div` // Cards Categoria
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
`

// eslint-disable-next-line import/no-anonymous-default-export
export default {  Container, C, B, A };
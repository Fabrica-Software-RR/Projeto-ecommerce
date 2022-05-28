import { Card, Carousel } from 'antd'
import styled from 'styled-components'

export const ContainerCarrosel = styled.div`
  display: block;
  position: absolute;
  width: 100%;
  height: 400px;
  `
export const StyledCarousel = styled(Carousel)`

  `
export const CardCarrosel = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 200px 200px;
  padding: 0px 0px  0px 00px;
  margin:0px;
  width: 80%;
  background-size: cover;
  height: 200px;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
`



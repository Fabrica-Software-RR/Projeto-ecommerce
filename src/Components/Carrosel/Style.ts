import { Card, Carousel } from 'antd'
import styled from 'styled-components'

export const ContainerCarrosel = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height:100%;
  `
export const StyledCarousel = styled(Carousel)`
display: block;
position:absolute;
align-items: center;
justify-content: center;
width: 100%;
height: 100%;
//background-color: blue;
  `
export const CardCarrosel = styled(Card)`
  display: block;
  width: 600px;
  height: 600px;
  background-size: contain;
  justify-content: center;
  align-items: center;
`

export const ImageCarrosel = styled.img`

  width: 100%;
  height:100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`




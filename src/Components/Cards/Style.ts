import { Carousel } from 'antd'
import styled from 'styled-components'

export const Cards = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  @media screen and (min-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
  }
`

export const StyledCarousel = styled(Carousel)`
display: flex;
width: 100%;
height: 400px;
align-items: center;
justify-content: center;
background-size: cover;
@media screen and (min-width: 375px) {
    justify-content:center;
    align-items: center;
    font-size: 24px;
  }
`

export const ContainerCarrosel = styled.div`
  display: block;
  position: absolute;
  width: 100%;
`

import { Carousel } from 'antd'
import styled from 'styled-components'

export const ContainerCarrosel = styled.div`
  display: block;
  width: 100%;
  height: 400px;
  background-color: #f59e0b;
  @media screen and (min-width: 375px) {
      display: block;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      font-size: 24px;
      height: 175px;
    }
  `
export const StyledCarousel = styled(Carousel)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: aqua;
  @media screen and (min-width: 375px) {
      display: block;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      font-size: 24px;
      height: 175px;
    }
  `
export const Cards = styled.div`
  display: flex;
  margin: ;
  width: 100%;
  height: 400px;
  justify-content: center;
  align-items: center;
`



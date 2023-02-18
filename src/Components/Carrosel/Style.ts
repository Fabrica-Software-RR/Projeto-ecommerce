import { Card, Carousel } from 'antd';
import styled from 'styled-components';

export const ContainerCarrosel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 80%;
  height: 80%;
`;
export const StyledCarousel = styled(Carousel)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
`;
export const CardCarrosel = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 400px;
  background-color: aqua;
  overflow: hidden;
`;

export const ImageCarrosel = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

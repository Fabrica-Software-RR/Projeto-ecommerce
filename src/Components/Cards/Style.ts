import styled from "styled-components";
import { Card } from "antd";

export const CardAnt = styled(Card)`
  display: block;
  width: 10%;
  height: 30%;
  background-color: #f5f5f5;
`;

export const ContainerCard = styled.div`
display: flex;
flex-wrap: nowrap;
flex-direction: row;
align-items: center;
justify-content: space-between;
//
width: 100%;
height: 100%;
`


export const ContainerCards = styled.div`
display: block;
width: 100%;
height: 100%;
`
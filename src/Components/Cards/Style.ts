import styled from "styled-components";
import { Card } from "antd";



export const CardAnt = styled(Card)`
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
`;

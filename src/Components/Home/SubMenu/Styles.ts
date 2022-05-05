import { MenuOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const SubMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  background-color:#c2410c;
  font-size: 24px;
  color: white;
  font-weight: bold;
  @media screen and (max-width: 340px) {
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
  }
`;


export const MenuHamburger = styled(MenuOutlined)`
  font-size: 24px;
  cursor: pointer;
  margin: 10px;
  @media screen and (max-width: 340px) {
    font-size: 24px;
    margin: 5px;
  }
  :hover {
    color:  #d97706  ;
    transition: 0.5s;
  }
`;


export const BotaoMenu = styled.span`
  font-size: 24px;
  cursor: pointer;
  margin: 5px;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  :hover {
    color:  #d97706  ;
    transition: 0.5s;
  }
`;

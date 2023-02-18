import { MenuOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import styled from 'styled-components';

export const SubMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 80px;
  font-size: 24px;
  color: white;
  font-weight: bold;
  background-color: aliceblue;
  @media screen and (max-width: 340px) {
    justify-content: space-around;
    align-items: center;
    font-size: 24px;
  }
`;

export const MenuHamburger = styled(MenuOutlined)`
  font-size: 24px;
  cursor: pointer;
  margin: 10px;
  color: black;
  @media screen and (min-width: 415px) {
    display: none;
    align-items: center;
    justify-content: center;
  }
  :hover {
    color: #f28705;
    transition: 0.5s;
  }
`;

export const BotaoMenu = styled.button`
  font-size: 24px;
  cursor: pointer;
  margin: 5px;
  padding: 0.5em;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  color: black;
  @media screen and (max-width: 415px) {
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 10px;
  }
  :hover {
    transition: 0.5s;
    background-color: #f28705;
  }
`;

export const Buscar = styled.div`
  display: flex;
  background-color: aliceblue;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 50%;
  height: 50px;
`;

export const Carrinho = styled.div`
  display: flex;
  color: black;
  align-items: center;
  justify-content: center;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  font-size: 36px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    transition: 0.5s;
    background-color: #f28705;
  }
`;

export const ModalStyled = styled(Modal)`
  width: 100%;
  height: 100%;
  background-color: #f25c05;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 340px) {
    font-size: 24px;
    width: 100%;
    height: 100%;
    margin: 5px;
  }
`;

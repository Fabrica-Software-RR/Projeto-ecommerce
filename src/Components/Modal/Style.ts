import styled from 'styled-components';
import { Modal } from 'antd';

export const ModalStyled = styled(Modal)`
  width: 50%;
  height: 50%;
  background-color: #fdba74;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  @media screen and (max-width: 340px) {
    font-size: 24px;
    width: 50%;
    height: 50%;
    margin: 5px;
  }
`;

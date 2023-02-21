import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #35333313;
`;

const C = styled.div`
  display: flex;
  align-items:center;
  flex-direction:column;
  justify-content: center;
  width: 100%;
  height: 40%;
`;

//div carrosel ajustar no meio da tela
const B = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 50px;
  width: 100%;
  height: auto;
`;

const A = styled.div`
  // Cards Categoria
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height:auto;
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default { Container, C, B, A };

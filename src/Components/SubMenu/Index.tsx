import { useState } from 'react';
import { ListaDeBotoes } from '../../Servicos/Interfaces/Interface';
import Modal from '../Modal/Index';
import { SubMenu, MenuHamburger, BotaoMenu, Carrinho } from './Styles';

function RenderSubMenu({ listaBotoes }: ListaDeBotoes) {
  const [visible, setVisible] = useState(false);

  function onSearch(value: any) {
    console.log(value);
  }

  function onVisibleChange(visible: boolean) {
    setVisible(visible);
  }

  function carrinho() {
    setVisible(true);
  }

  function fecharModal() {
    setVisible(false);
  }

  return (
    <SubMenu>
      <MenuHamburger onClick={() => onVisibleChange(true)}></MenuHamburger>
      {listaBotoes &&
        listaBotoes.map((botao, index) => (
          <BotaoMenu key={index}>{botao}</BotaoMenu>
        ))}
      <Modal
        visivel={visible}
        onClose={fecharModal}
        title={'Estes são os itens que você adicionou no carrinho :'}
        onOk={fecharModal}
        texto={'Estes são os itens que você adicionou no carrinho :'}
      />
    </SubMenu>
  );
}
export default RenderSubMenu;

import { ShoppingCartOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { ListaDeBotoes } from '../../Interfaces/Interface'
import Modal from '../../Modal/Index'
import { SubMenu, MenuHamburger, BotaoMenu, Carrinho } from './Styles'

function RenderSubMenu({ listaBotoes }: ListaDeBotoes) {
  const [visible, setVisible] = useState(false)

  function onSearch(value: any) {
    console.log(value)
  }

  function carrinho() {
    setVisible(true)
  }

  function fecharModal() {
    setVisible(false)
  }

  return (
    <SubMenu>
      <MenuHamburger></MenuHamburger>
      <Carrinho>
        <ShoppingCartOutlined
          onClick={() => {
            carrinho()
          }}
          style={{ fontSize: '36px', color: 'white', cursor: 'pointer' }}
        />
      </Carrinho>
      {listaBotoes.map((botao, index) => (
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
  )
}
export default RenderSubMenu

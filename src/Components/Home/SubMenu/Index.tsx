import { ListaDeBotoes } from '../../Interfaces/Interface'
import { SubMenu, MenuHamburger, BotaoMenu } from './Styles'

function RenderSubMenu({ listaBotoes }: ListaDeBotoes) {
  return (
    <SubMenu>
      <MenuHamburger>
        <span></span>
      </MenuHamburger>
      {listaBotoes.map((botao, index) => (
        <BotaoMenu key={index}>{botao}</BotaoMenu>
      ))}
    </SubMenu>
  )
}
export default RenderSubMenu
import { SubMenu, MenuHamburger, BotaoMenu } from './Styles'

interface ListaDeBotoes {
  listaBotoes: string[]
}

export default function RenderSubMenu({ listaBotoes }: ListaDeBotoes) {
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

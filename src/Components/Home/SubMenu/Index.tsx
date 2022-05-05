import { SubMenu, MenuHamburger, BotaoMenu } from './Styles'

interface ITextoMenu {
  textoMenu: string[]
}

export default function RenderSubMenu({ textoMenu }: ITextoMenu) {
  return (
    <SubMenu>
      <MenuHamburger>
        <span></span>
      </MenuHamburger>
      {textoMenu.map((texto, index) => (
        <BotaoMenu key={index}>{texto}</BotaoMenu>
      ))}
    </SubMenu>
  )
}

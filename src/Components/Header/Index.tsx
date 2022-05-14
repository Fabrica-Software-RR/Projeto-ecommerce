import { IImage } from '../Interfaces/Interface'
import { Cabecalho, Logo } from './Style'



function MenuHerder({ logo, texto, placeholder, loading }: IImage) {
  return (
    <Cabecalho>
      <Logo />
    </Cabecalho>
  )
}

export default MenuHerder

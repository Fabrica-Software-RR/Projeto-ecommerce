import { IImage } from '../Interfaces/Interface'
import { Cabecalho, Logo } from './Style'

function MenuHerder({ logo, texto, placeholder, loading }: IImage) {
  return (
    <Cabecalho>
      <Logo style={{ backgroundImage: `url(${logo})` }} />
    </Cabecalho>
  )
}

export default MenuHerder

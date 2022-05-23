import { Button } from 'antd'
import { Buscar } from '../Home/SubMenu/Styles'
import { IImage } from '../Interfaces/Interface'
import { Cabecalho, Logo } from './Style'



function MenuHerder({ logo ,texto, placeholder, loading }: IImage) {
  return (
    <Cabecalho>
      <Logo style={{backgroundImage:`url(${logo})`}} />
    </Cabecalho>
  )
}

export default MenuHerder

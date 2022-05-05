//import { Layout } from 'antd';
import { Container } from '../Container/Style'
import  MenuHerder  from './Basicos/Index'
import logo from '../../../public/logo.jpeg'
import SubMenu from './SubMenu/Index'
import Carrosel from '../Carrosel/Index'

const listas = [ 'Todos Produtos', 'Ofertas', 'Novidades', 'Mais Vendidos' ]


export default function Esqueleto() {
  return (
    <Container>
      <MenuHerder
        logo={logo}
        texto={'REI DAS CAPINHAS'}
        placeholder={'Procure seu produto'}
      />
      <SubMenu textoMenu={listas}/>
      <Carrosel/>
    </Container>
  )
}

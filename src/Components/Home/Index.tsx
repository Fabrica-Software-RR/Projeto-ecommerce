//import { Layout } from 'antd';
import { Container } from '../Container/Style'
import MenuHerder from '../Header/Index'
import SubMenu from './SubMenu/Index'
import { listaBotoes } from '../ListaTeste/Lista'
import CarroselDeCards from '../Carrosel/Index'
import CardExibicao from '../Cards'

export default function Esqueleto() {
  const logo = '/Fotos/rei-png.png'

  return (
    <>
      <Container>
        <MenuHerder
          logo={logo}
          texto={'REI DAS CAPINHAS'}
          placeholder={'Procure seu produto'}
        />
        <SubMenu listaBotoes={listaBotoes} />
        <CarroselDeCards />
        <CardExibicao />
      </Container>
    </>
  )
}

//import { Layout } from 'antd';
import { Container, C, B, A } from '../../Container/Style'
import MenuHerder from '../../Header/Index'
import SubMenu from '../../SubMenu/Index'
import { listaBotoes } from '../../ListaTeste/Lista'
import CarroselDeCards from '../../Carrosel/Index'
import CardExibicao from '../../CardsGroups'

export default function Esqueleto() {
  const logo = '/Fotos/rei-png.png'

  return (
    <Container>
      <C>
        <MenuHerder
          logo={logo}
          texto={'REI DAS CAPINHAS'}
          placeholder={'Procure seu produto'}
        />
        <SubMenu listaBotoes={listaBotoes} />
      </C>
      <B>
        <CarroselDeCards />
      </B>
      <A>
        <CardExibicao />
      </A>
    </Container>
  )
}
